package router

import (
	"net/http"

	"bowen/controllers"

	"github.com/gin-gonic/gin"
)

var addressController = new(controllers.AddressController)
var resourceController = new(controllers.ResourceController)

func InitRouter() *gin.Engine {
	r := gin.Default()

	api := r.Group("/api")
	{
		api.GET("", func(c *gin.Context) {
			c.String(http.StatusOK, "Bowen API is up and running.\n")
		})
		address := api.Group("/address")
		{
			address.GET("", addressController.List)
			address.GET(":id", addressController.Detail)
		}
		resource := api.Group("/resource")
		{
			resource.PUT("", resourceController.Create)
		}
	}

	return r
}
