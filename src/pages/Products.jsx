import React from 'react';
import Box from '../components/Box';
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
const Products = () => {
	return (
		<Box>
			<Title>Products</Title>
			<div className="mt-5">
				<form action="" method="post">
					<Input type="text" label="Status" placeholder="Status Products" />
					<Input type="text" label="Title" placeholder="Status Products" />
					<Input type="number" label="Price" placeholder="Price Products" />
					<Input
						label="Product Description"
						type="textarea"
						cols={30}
						rows={5}
					/>
					<Input
						type="number"
						label="Minimum Credits"
						placeholder="Status Products"
					/>
					<Input type="number" label="Stock" placeholder="Stock Products" />
					<Input type="text" label="Category" placeholder="Category Products" />
					<Input type="text" label="Series" placeholder="Series Products" />
					<Input
						type="text"
						label="Character"
						placeholder="Character Products"
					/>
					<Input
						type="text"
						label="Manufacture"
						placeholder="Manufacture Products"
					/>
					<div className="flex flex-col  w-1/2">
						<Button className="mt-5 ">Simpan</Button>
					</div>
				</form>
			</div>
		</Box>
	);
};

export default Products;
