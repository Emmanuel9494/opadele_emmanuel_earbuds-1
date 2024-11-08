(() => {
  console.log("IIFE Fired");

  const hotspotInfo = [
    {
      slot: "hotspot-1",
      title: "Touch Input",
      infoDetails: "This allows users to control playback, answer calls, and access voice assistants with a simple tap.",
      imgPath: "images/touch-img.png"
    },
    {
      slot: "hotspot-2",
      title: "360 Woofer",
      infoDetails: "The 360-degree woofer ensures deep, resonant bass from all angles, enhancing music and media playback.",
      imgPath: "images/woffer.png"
    },
    {
      slot: "hotspot-3",
      title: "Ear Tips",
      infoDetails: "The earbuds come with multiple sizes of soft, silicone ear tips for a secure and comfortable fit.",
      imgPath: "images/eartips.png"
    },
    {
      slot: "hotspot-4",
      title: "Right Earbud",
      infoDetails: "Specifically designed with dedicated right-ear features to ensure optimal sound balance and comfort.",
      imgPath: "images/right-ear.png"
    },
    {
      slot: "hotspot-5",
      title: "Charging Connector",
      infoDetails: "Equipped with a fast and efficient charging connector, making recharging easy and convenient.",
      imgPath: "images/charging.png"
    }
  ];

  const hotSpots = document.querySelectorAll(".Hotspot");
  console.log(hotSpots);

  // Helper function to create and populate content
  function inputWord(inputWords, selected) {
    selected.innerHTML = `
      <h2>${inputWords.title}</h2>
      <p>${inputWords.infoDetails}</p>
      <img src="${inputWords.imgPath}" alt="${inputWords.title}">
    `;
  }

  // Functions
  function showInfo(e) {
    console.log(e.currentTarget.slot);
    const slot = e.currentTarget.slot;
    const inputWords = hotspotInfo.find(item => item.slot == slot);

    if (inputWords) {
      let selected = document.querySelector(`button[slot="${slot}"] > div`);

      // Adding the content to the DOM
      inputWord(inputWords, selected);

    

      // GSAP p, and img 
      gsap.to(selected, { autoAlpha: 1, duration: 1 });
      gsap.fromTo(
        selected.querySelector("p"),
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1, delay: 0.2 }
      );
      gsap.fromTo(
        selected.querySelector("img"),
        { autoAlpha: 0, scale: 2 },
        { autoAlpha: 1, scale: 1, duration: 1, delay: 0.4 }
      );
    }
  }

  function hideInfo(e) {
    let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  // Event listeners
  hotSpots.forEach(hotSpot => {
    hotSpot.addEventListener("mouseover", showInfo);
    hotSpot.addEventListener("mouseout", hideInfo);
  });
})();
