package main

import (
	"fmt"
	"gpt/utils"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	// Update with the correct path to your utils package
)

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Initialize Gin
	router := gin.Default()

	// CORS middleware
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"}, // Allow all origins
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type"},
	}))

	// Define a handler function for the root endpoint
	router.POST("/", func(c *gin.Context) {
		var requestBody map[string]string
		if err := c.ShouldBindJSON(&requestBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
			return
		}

		// Get the prompt from the request body
		prompt, ok := requestBody["prompt"]
		if !ok {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Prompt not found in request body"})
			return
		}

		// Call GenerateImage function from the utils package
		imageURL, err := utils.GenerateImage(prompt)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Error generating image: " + err.Error()})
			return
		}

		// Write the image URL back to the client
		c.JSON(http.StatusOK, gin.H{"image_url": imageURL})
	})

	// Start the Gin server
	port := ":8080"
	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(router.Run(port))
}
