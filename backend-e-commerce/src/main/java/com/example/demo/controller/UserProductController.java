package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ProductException;
import com.example.demo.model.Product;
import com.example.demo.services.ProductService;

@RestController
@RequestMapping("/api")
public class UserProductController {

	@Autowired
    private final ProductService productService;

    // Constructor injection for better testability
    public UserProductController(ProductService productService) {
        this.productService = productService;
    }

    // Endpoint to filter and paginate products
    @GetMapping("/products")
    public ResponseEntity<Page<Product>> findProductByCategoryHandler(
            @RequestParam String category,
            @RequestParam List<String> color,
            @RequestParam List<String> size,
            @RequestParam Integer minPrice,
            @RequestParam Integer maxPrice,
            @RequestParam Integer minDiscount,
            @RequestParam String sort,
            @RequestParam String stock,
            @RequestParam Integer pageNumber,
            @RequestParam Integer pageSize) {

        // Validate inputs if necessary before passing them to service
        if (pageNumber < 0 || pageSize < 1) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Page<Product> res = productService.getAllProduct(
                category, color, size, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize
        );

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    // Endpoint to find a product by its ID
    @GetMapping("/products/id/{productId}")
    public ResponseEntity<Product> findProductByIdHandler(@PathVariable Long productId) {
        try {
            Product product = productService.findProductById(productId);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (ProductException e) {
            // Handle product not found exception
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to search for products by a query string
    @GetMapping("/products/search")
    public ResponseEntity<List<Product>> searchProductHandler(@RequestParam String q) {
        if (q.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        List<Product> products = productService.searchProduct(q);
        return products.isEmpty() ?
                new ResponseEntity<>(HttpStatus.NO_CONTENT) :
                new ResponseEntity<>(products, HttpStatus.OK);
    }
}
