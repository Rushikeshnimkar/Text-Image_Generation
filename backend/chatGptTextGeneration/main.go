package main

import (
	"fmt"
	"log"
	"net/http"

	"gpt/utils"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv" // If you're using environment variables
)

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Initialize the router
	router := gin.Default()

	// CORS middleware configuration
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))

	// Define a handler function for the root endpoint
	router.POST("/", func(c *gin.Context) {
		// Parse the request body
		var requestBody map[string]string
		if err := c.BindJSON(&requestBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
			return
		}

		// Get the prompt from the request body
		prompt, ok := requestBody["prompt"]
		if !ok {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Prompt not found in request body"})
			return
		}

		// Call GetChatGptResponse function from the utils package
		response, err := utils.GetChatGptResponse(prompt)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error getting ChatGPT response"})
			return
		}

		// Write the response back to the client
		c.JSON(http.StatusOK, gin.H{"response": response})
	})

	// Start the HTTP server
	port := ":8001"
	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(http.ListenAndServe(port, router))
}
