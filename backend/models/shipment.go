package models

import (
	"net/http"

	"github.com/go-playground/validator/v10"
)

type Shipment struct {
	ShipmentNumber string `json:"shipment_number"`
	LicenseNumber  string `json:"license_number"`
	DriverName     string `json:"driver_name"`
	Origin         string `json:"origin"`
	Destination    string `json:"destination"`
	LoadingDate    string `json:"loading_date"`
	Status         string `json:"status"`
	Action         string `json:"action"`
}

func FetchAllShipments() (Response, error) {
	var res Response

	shipments := []Shipment{}

	DB.Find(&shipments)

	res.Status = http.StatusOK
	res.Message = "Success"
	res.Data = shipments

	return res, nil
}

func AddShipment(shipmentNumber, licenseNumber, driverName, origin, destination, loadingDate, status, action string) (Response, error) {
	var res Response

	v := validator.New()
	shipmentStruct := Shipment{
		ShipmentNumber: shipmentNumber,
		LicenseNumber:  licenseNumber,
		DriverName:     driverName,
		Origin:         origin,
		Destination:    destination,
		LoadingDate:    loadingDate,
		Status:         status,
		Action:         action,
	}
	// validation input
	err := v.Struct(shipmentStruct)
	if err != nil {
		return res, err
	}

	DB.Create(&shipmentStruct)
	res.Status = http.StatusOK
	res.Message = "new shipment successfully created"
	res.Data = shipmentStruct
	return res, nil
}

func UpdateShipmentStatus(shipmentNumber, licenseNumber, driverName, origin, destination, loadingDate, status, action string) (Response, error) {
	var res Response

	var shipment Shipment
	if err := DB.Where("shipment_number = ?", shipmentNumber).First(&shipment).Error; err != nil {
		res.Status = http.StatusInternalServerError
		res.Message = "the shipment which will be updated not found !"
		return res, err
	}

	v := validator.New()
	shipmentStruct := Shipment{
		ShipmentNumber: shipmentNumber,
		LicenseNumber:  licenseNumber,
		DriverName:     driverName,
		Origin:         origin,
		Destination:    destination,
		LoadingDate:    loadingDate,
		Status:         status,
		Action:         action,
	}
	// validation input
	err := v.Struct(shipmentStruct)
	if err != nil {
		return res, err
	}
	DB.Where("shipment_number = ?", shipmentNumber).Updates(shipmentStruct)

	res.Status = http.StatusOK
	res.Message = "new shipment successfully updated"
	res.Data = shipmentStruct

	return res, nil
}
