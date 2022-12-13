package com.revature.springpractice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Before;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.*;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.revature.cardfans.CardFans;
import com.revature.cardfans.controllers.UserController;

import org.springframework.restdocs.*;
import org.springframework.restdocs.mockmvc.*;
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
@SpringBootTest(classes = { CardFans.class })
class TestCardFans {
	@Rule
	public RestDocumentationContextProvider restDocumentation = new JUnitRestDocumentation("target/generated-snippets");
	@Autowired
	private WebApplicationContext context;

	private MockMvc mockMvc;

	@Before
	public void setUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context)
				.apply(MockMvcRestDocumentation.documentationConfiguration(this.restDocumentation).snippets())
				.build();
	}

	@Test
	void contextLoads() {
		assertEquals(1, 1);
	}

}
