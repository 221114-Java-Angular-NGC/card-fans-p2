package com.revature.springpractice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Before;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.*;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.*;
import com.revature.cardfans.CardFans;
import com.revature.cardfans.controllers.UserController;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import org.springframework.restdocs.*;
import org.springframework.restdocs.mockmvc.*;
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@RunWith(SpringRunner.class)
@ExtendWith({ RestDocumentationExtension.class, SpringExtension.class })
@SpringBootTest(classes = CardFans.class)
class TestProductModules {

	@Autowired
	private WebApplicationContext context;

	private MockMvc mockMvc;

	@BeforeEach
	public void setUp(WebApplicationContext webApplicationContext, RestDocumentationContextProvider restDocumentation) {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context)
				.apply(documentationConfiguration(restDocumentation))
				.build();

	}

	// Testing the only endpoint for products
	@Test
	public void shouldReturnProductList() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products").accept(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andDo(document("index"));
		// this.mockMvc.perform(get("/")).andExpect(status().isOk());
		// alwaysDo(MockMvcRestDocumentation.document("{method-name}/{step}/"))
	}

	@Test
	public void shouldReturnProductList2() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/products").accept(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isOk())
				.andDo(document("index"));
		// this.mockMvc.perform(get("/")).andExpect(status().isOk());
		// alwaysDo(MockMvcRestDocumentation.document("{method-name}/{step}/"))
	}

}
