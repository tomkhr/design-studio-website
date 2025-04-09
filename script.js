const eventdates = document.querySelectorAll("div.hasEvent");

for (let i = 0; i < eventdates.length; i++) {
  eventdates[i].addEventListener("click", function () {
    if ((eventPopUpWindow.style.display = "none")) {
      eventPopUpWindow.style.display = "inline";
      popUpHolder.style.display = "flex";
    } else {
      eventPopUpWindow.style.display = "none";
      popUpHolder.style.display = "none";
    }

    switch (i) {
      case 0:
        eventSpace1.style.display = "flex";
        eventSpace2.style.display = "flex";
        eventSpace3.style.display = "flex";
        eventSpace4.style.display = "none";
        date.innerHTML = "Monday, June 1";
        //event card 1
        venue1.innerHTML = "Art's Art Expo";
        address1.innerHTML = "42 Art Street";
        time1.innerHTML = "2:00pm - 8:00pm";
        //card 2 will be at it's initial values
        //event card 3
        venue3.innerHTML = "A Worse Night Market";
        address3.innerHTML = "1 Dark Alley";
        time3.innerHTML = "10:00pm - 2:00am";
        break;
      case 1:
        eventSpace1.style.display = "none";
        eventSpace2.style.display = "flex";
        eventSpace3.style.display = "none";
        eventSpace4.style.display = "flex";

        //event card 1
        venue2.innerHTML = "Tuesday Farmers Market";
        address2.innerHTML = "1234 Street Street";
        time2.innerHTML = "2:00pm - 8:00pm";
        //card 2 will be at it's initial values
        //event card 3
        date.innerHTML = "Tuesday, June 2";
        venue4.innerHTML = "Buck's Woodcarving Competition";
        address4.innerHTML = "78 Woodland Road";
        time4.innerHTML = "9:00am - 5:00pm";
        break;
      case 2:
        eventSpace1.style.display = "flex";
        eventSpace2.style.display = "none";
        eventSpace3.style.display = "none";
        eventSpace4.style.display = "none";
        date.innerHTML = "Friday June 5";
        venue1.innerHTML = "Friday Festival";
        address1.innerHTML = "54 Evergreen Terrace";
        time1.innerHTML = "10:00am - 7:00pm";
        break;
    }
  });
}

closebutton.addEventListener("click", function () {
  eventPopUpWindow.style.display = "none";
  popUpHolder.style.display = "none";
});
