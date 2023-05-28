import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { StockStatus } from '../Utils/Types';
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

interface Props {}

const AddProductModal: FC<Props> = () => {
  const [product, setProduct] = useState(defaultNewProduct);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
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
        <FormControl>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="category"
            value={product.category}
            label="category"
            onChange={(category) =>
              setProduct({
                ...product,
                category: category.target.value,
              })
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

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
          label="Stock Quantity"
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
          <InputLabel id="category">Supplier</InputLabel>
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id="category"
            value={product.category}
            label="category"
            onChange={(category) =>
              setProduct({
                ...product,
                category: category.target.value,
              })
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
