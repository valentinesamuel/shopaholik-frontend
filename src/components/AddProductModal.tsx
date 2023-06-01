import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import SelectOptions from './SelectOptions';
import { categories } from '../Utils/categories';
import { StockStatus } from '../Utils/Types';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const defaultNewProduct = {
  name: '',
  category: '',
  product_code: '',
  quantity_in_stock: 0,
  min_quantity: 0,
  unit_price: 0,
  date_of_arrival: dayjs(new Date()),
  expiry_date: dayjs(new Date()),
  supplier_id: '',
  quantity: 0,
  unit_of_measurement: 'Carton',
  shelf_life_duration: '',
  stock_status: StockStatus.IN_STOCK,
};

const suppliersList = [
  { id: 'w3094', name: 'Nike Inc', value: 'nike' },
  { id: 'dfvn30', name: 'Nestle Inc', value: 'nestle' },
  { id: '2904nm', name: 'Artzy Group Inc', value: 'artzy_group' },
];

interface Props {}

const AddProductModal: FC<Props> = () => {
  const [product, setProduct] = useState(defaultNewProduct);
  const [supplierList, _] = useState(suppliersList);

  const handleAddProduct = () => {
    console.log(product);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const onSelectSupplier = (supplier: {
    id: string;
    name: string;
    value: string;
  }) => {
    setProduct({ ...product, supplier_id: supplier.id });
  };

  return (
    <Box>
      <Typography variant="h4">Add Product</Typography>
      <Typography variant="h6" onClick={() => console.log(product)}>
        Product Information
      </Typography>
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
              category: category.target.value,
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
              expiry_date: newExpiryDate as Dayjs,
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
          <InputLabel id="relationship">Supplier</InputLabel>
          <Select
            labelId="relationship"
            id="relationship"
            value={product.supplier_id}
            label="relationship"
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
            {supplierList.map((supplier) => (
              <MenuItem
                key={supplier.id}
                onClick={() => onSelectSupplier(supplier)}
                value={supplier.id}
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
              date_of_arrival: newDateOfArrival as Dayjs,
            })
          }
        />
      </Box>

      <Box
        sx={{
          marginTop: '10%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            desktop: 'row',
            mobile: 'column',
          },
        }}
      >
        <Button
          color="error"
          variant="contained"
          startIcon={<DeleteForeverIcon />}
          sx={{
            marginTop: {
              desktop: '0%',
              mobile: '5%',
            },
            width: {
              desktop: 'fit-content',
              mobile: '100%',
            },
          }}
        >
          Delete Product
        </Button>
        <Button
          color="success"
          onClick={handleAddProduct}
          startIcon={<DoneAllIcon />}
          variant="contained"
          sx={{
            marginTop: {
              desktop: '0%',
              mobile: '5%',
            },
            width: {
              desktop: '30%',
              mobile: '100%',
            },
          }}
        >
          Save Product
        </Button>
      </Box>
    </Box>
  );
};

export default AddProductModal;
