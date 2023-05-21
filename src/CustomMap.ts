interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLDivElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mapple: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapple.location.lat,
        lng: mapple.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoViewWindow = new google.maps.InfoWindow({
        content: mapple.markerContent(),
      });
      infoViewWindow.open(this.googleMap, marker);
    });
  }
}
