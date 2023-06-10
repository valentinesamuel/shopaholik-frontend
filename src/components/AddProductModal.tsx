import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import SelectOptions from './SelectOptions';
import { categories } from '../Utils/categories';
import {
  Product,
  ProductCategory,
  StockStatus,
  Supplier,
} from '../Utils/Types';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useAddInventoryProductsMutation } from '../store/slice/InventorySlice/InventoryApiSlice';
import { useGetSuppliersQuery } from '../store/slice/SupplierSlice/SupplierApiSlice';

const defaultNewProduct: Product = {
  product_id: '',
  quantity_sold: 0,
  name: '',
  category: ProductCategory.Select,
  product_code: '',
  quantity_in_stock: 0,
  min_quantity: 0,
  unit_price: 0,
  date_of_arrival: '',
  expiry_date: '',
  supplier_id: '',
  quantity: 0,
  unit_of_measurement: '',
  shelf_life_duration: '',
  stock_status: StockStatus.IN_STOCK,
};

interface Props {}

const AddProductModal: FC<Props> = () => {
  const [errMsg, setErrMsg] = useState({
    error: '',
    success: '',
  });
  const [product, setProduct] = useState(defaultNewProduct);
  const { data: storeSupplierList } = useGetSuppliersQuery();
  const [supplierList, _] = useState(storeSupplierList);
  const [addProductToInventory, { isLoading }] =
    useAddInventoryProductsMutation();

  const handleAddProduct = async () => {
    try {
      await addProductToInventory(product).unwrap();
      setErrMsg({
        error: '',
        success: 'Product added',
      });
      setTimeout(() => {
        setErrMsg({ error: '', success: '' });
      }, 2000);
    } catch (error) {
      setErrMsg({
        error: 'Failed to add product. Please try again',
        success: '',
      });
      setTimeout(() => {
        setErrMsg({ error: '', success: '' });
      }, 2000);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const onSelectSupplier = (supplier: Supplier) => {
    setProduct({ ...product, supplier_id: supplier.supplier_id });
  };

  return (
    <Box>
      {errMsg.error && <Alert severity="error">{errMsg.error}</Alert>}
      {errMsg.success && <Alert severity="success">{errMsg.success}</Alert>}
      <Typography variant="h4">Add Product</Typography>
      <Typography variant="h6">Product Information</Typography>
      <Box
        sx={{
          display: { desktop: 'grid' },
          gridTemplateColumns: ' minmax(200px, 1fr) minmax(300px, 2fr)',
          gap: '10px',
        }}
      >
        <TextField
          name="name"
          onChange={handleChange}
          value={product.name}
          type="text"
          label="Product Name"
          variant="outlined"
          sx={{
            width: '100%',
            marginBottom: {
              desktop: '0',
              mobile: '5%',
            },
          }}
        />
        <TextField
          name="product_code"
          onChange={handleChange}
          value={product.product_code}
          type="text"
          label="Product Code"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px',
          margin: { mobile: '5% 0', desktop: '2% 0' },
        }}
      >
        <SelectOptions
          width="100%"
          selectLabel="Categories"
          label="categories"
          options={categories}
          handleChange={(category) =>
            setProduct({
              ...product,
              category: category.target.value as ProductCategory,
            })
          }
          value={product.category}
          sxStyles={{ marginRight: '5%' }}
        />

        <TextField
          name="quantity"
          onChange={handleChange}
          value={product.quantity}
          type="text"
          label="Quantity"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px',
          margin: { mobile: '5% 0', desktop: '2% 0' },
        }}
      >
        <TextField
          name="unit_price"
          onChange={handleChange}
          value={product.unit_price}
          type="text"
          label="Unit Price"
          variant="outlined"
        />
        <TextField
          name="quantity_in_stock"
          onChange={handleChange}
          value={product.quantity_in_stock}
          type="text"
          label="Stock Quantity"
          variant="outlined"
        />
        <DatePicker
          label="Expiry Date"
          value={product.expiry_date}
          onChange={(newExpiryDate) =>
            setProduct({
              ...product,
              expiry_date: dayjs(newExpiryDate).format(),
            })
          }
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px',
          margin: { mobile: '5% 0', desktop: '2% 0' },
        }}
      >
        <TextField
          name="unit-of-measurement"
          onChange={handleChange}
          value={product.unit_of_measurement}
          type="text"
          label="Unit of Measurement"
          variant="outlined"
        />

        <FormControl>
          <InputLabel id="supplier">Supplier</InputLabel>
          <Select
            labelId="supplier"
            id="supplier"
            value={product.supplier_id}
            label="supplier"
            onChange={(supplier) =>
              setProduct({
                ...product,
                supplier_id: supplier.target.value,
              })
            }
          >
            <MenuItem disabled value={''}>
              Select
            </MenuItem>
            {supplierList &&
              supplierList.map((supplier) => (
                <MenuItem
                  key={supplier.supplier_id}
                  onClick={() => onSelectSupplier(supplier)}
                  value={supplier.supplier_id}
                >
                  {supplier.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          name="shelf_life_duration"
          onChange={handleChange}
          value={product.shelf_life_duration}
          type="text"
          label="Shelf Life"
          variant="outlined"
        />
        <TextField
          name="min_quantity"
          onChange={handleChange}
          value={product.min_quantity}
          type="text"
          label="Min. Quantity"
          variant="outlined"
        />
        <DatePicker
          label="Date of Arrival"
          value={product.date_of_arrival}
          onChange={(newDateOfArrival) =>
            setProduct({
              ...product,
              date_of_arrival: dayjs(newDateOfArrival).format(),
            })
          }
        />
      </Box>

      <Button
        disabled={isLoading}
        color="success"
        onClick={handleAddProduct}
        startIcon={<DoneAllIcon />}
        variant="contained"
        sx={{
          marginTop: {
            desktop: '0%',
            mobile: '5%',
          },
          width: '100%',
        }}
      >
        {isLoading ? 'Loading...' : 'Save Product'}
      </Button>
    </Box>
  );
};

export default AddProductModal;
