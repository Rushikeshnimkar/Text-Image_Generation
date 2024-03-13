package router

import (
	"fmt"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.lazarusAI/controller"
)

func Router() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Initialize Gin
	router := gin.Default()

	// CORS middleware
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))

	// textgeneration

	router.POST("/text", controller.TextRouter)

	//image generation

	// Define a handler function for the root endpoint
	router.POST("/image", controller.ImageRouter)

	// Start the Gin server
	port := ":8080"
	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(router.Run(port))
}
