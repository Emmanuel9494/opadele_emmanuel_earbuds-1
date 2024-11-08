(() => {
    console.log("IIFE Fired");

    const infoHotspot = [
        {
          slot: "hotspot-1",
          title: "Touch Input",
          description: "This allows users to control playback, answer calls, and access voice assistants with a simple tap.",
          imgSrc: "images/touch-img.png"
        },
        {
          slot: "hotspot-2",
          title: "360 Woofer",
          description: "The 360-degree woofer ensures deep, resonant bass from all angles, enhancing music and media playback.",
          imgSrc: "images/woffer.png"
        },
        {
          slot: "hotspot-3",
          title: "Ear Tips",
          description: "The earbuds come with multiple sizes of soft, silicone ear tips for a secure and comfortable fit.",
          imgSrc: "images/eartips.png"
        },
        {
          slot: "hotspot-4",
          title: "Right Earbud",
          description: "Specifically designed with dedicated right-ear features to ensure optimal sound balance and comfort.",
          imgSrc: "images/right-ear.png"
        },
        {
          slot: "hotspot-5",
          title: "Charging Connector",
          description: "Equipped with a fast and efficient charging connector, making recharging easy and convenient.",
          imgSrc: "images/charging.png"
        }
      ];
      
  
    const hotSpots = document.querySelectorAll(".Hotspot");
    console.log(hotSpots);
    
   // Helper function to create and populate content
   function populateContent(hotspotDataItem, selected) {
    selected.innerHTML = `
      <h2>${hotspotDataItem.title}</h2>
      <p>${hotspotDataItem.description}</p>
      <img src="${hotspotDataItem.imgSrc}" alt="${hotspotDataItem.title}">
    `;
  }

  // Functions
  function showInfo(e) {
    console.log(e.currentTarget.slot);
    const slot = e.currentTarget.slot;
    const hotspotDataItem = infoHotspot.find(item => item.slot = slot);

    if (hotspotDataItem) {
      let selected = document.querySelector(`button[slot="${slot}"] > div`);

      // Populate the content dynamically
      populateContent(hotspotDataItem, selected);

      // Show info with animation
      gsap.to(selected, 1, {autoAlpha: 1});
    }
  }

  function hideInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, {autoAlpha: 0});
  }

  // Event listeners
  hotSpots.forEach(hotSpot => {
    hotSpot.addEventListener("mouseover", showInfo);
    hotSpot.addEventListener("mouseout", hideInfo);
  });
})();