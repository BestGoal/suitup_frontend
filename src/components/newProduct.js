import React from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./css/newproduct.css";

import Button from '@material-ui/core/Button';
import GridItem from "interface/Grid/GridItem.js";
import GridContainer from "interface/Grid/GridContainer.js";

import TextField from '@material-ui/core/TextField';

export default function Admin() {
  return (
    <div>
      <Button className = "product-first" variant="contained" color="secondary">
        All Product
      </Button>
      <div className = "product-second" >
        <div className = "product-third"><div className = "product-four">Add new Product</div></div>
        <div className = "product-third">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className='product-five'>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" label="Product Name"/>
                </div>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" min = {100} label="Product Price"/>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <div className='product-five'>
                <TextField multiline className = "product-floatLeft product-five-textfield" label="Item Description"/>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <div className='product-five'>
                <div className='product-five-half'>
                  <TextField className = "product-floatLeft product-five-textfield" type="number" label="Item Quantity"/>
                </div>
                <div className='product-five-half'>
                  <TextField type='file' className = "product-floatLeft product-five-textfield" label=" "/>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Button className = "product-six" variant="contained" color="primary">
                Create Product
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>

    </div>
  );
}