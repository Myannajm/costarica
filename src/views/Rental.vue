<template>
    <div>
        <h1>Housing Rentals in Costa Rica</h1>
<div class="container">
  <p>Costa Rica is a very popular place for many expats, due to the lower cost of living, rich cultural experience, and the relative safety and ease that comes with moving here. You can find a wide variety of inexpensive housing in Costa Rica, whether you rent or buy, and a wealth of every imaginable activity to keep you busy and happy.  If you move to Costa Rica, you can live comfortably on $2,500 to $3,000 per month, depending on your lifestyle. Personally, as I was only living here for a year I rented out an AirBnB on a monthly basis, which is a popular option for certain lengths of extended stays. Below are three properties I would suggest looking into as a start to your house hunting. Check out the links below for more rental information!</p>
<br>
  <h2><a href="https://www.airbnb.com/rooms/48211618?adults=2&check_in=2022-02-01&check_out=2022-03-01&previous_page_section_name=1000&federated_search_id=9fc9f2ea-adbc-416c-bf54-744b8c641e86&guests=1">1. Casa Volcano: San Carlos, Provincia de Alajuela</a></h2>
  <div id ="photo"><img src="/images/costahouse1.jpg"  alt="costa rica house 1" style="margin-left: 10%; width: 75%"></div>
  <br>
  <p>Volcano Home is located in Alto de Monterrey, just 25 minutes from La Fortuna. It is simply cozy, with a spectacular view of the Arenal Volcano, giving you the ease and comfort you deserve.
    You can enjoy your stay in a fully equipped house, with private parking, 2 rooms, living room, kitchen, laundry and WIFI internet.
    If what you are looking for is tranquility and a beautiful experience, Casa Volcano is for you. Monthly Rent: $762 USD</p>
    <h2><a href="https://www.airbnb.com/rooms/53092909?adults=2&location=Costa%20Rica&check_in=2022-03-01&check_out=2022-04-01&display_extensions%5B%5D=MONTHLY_STAYS&federated_search_id=eb5ac07b-bfe4-4116-bc40-4b9bf5bd75a7&guests=1">2. El Mar Home by the Sea: Jaco, Provincia de Puntarenas</a></h2>
    <div id ="photo"><img src="/images/costahouse2.jpeg"  alt="costa rica house 2" style="margin-left: 10%;width: 75%"></div>
    <br>
    <p>This beautiful property is located a 1/2 block from the beach in the Center of Jaco. The large swimming pool is surrounded by 12 apartments. The units have living, dining and kitchen areas. Everything is within walking distance. Renting bikes on the premises is a good way to see Jaco. 3 doors away is a surf shop to rent a board. Jaco walk is just across the street. Monthly Rent: $1,619 USD</p>
    <h2><a href="https://www.airbnb.com/rooms/22223908?adults=2&check_in=2022-03-01&check_out=2022-04-01&previous_page_section_name=1000&display_extensions%5B0%5D=MONTHLY_STAYS&federated_search_id=eb5ac07b-bfe4-4116-bc40-4b9bf5bd75a7&guests=1">3. Entire Rental Unit with Ocean Views: Tamarindo, Provincia de Guanacaste</a></h2>
    <div id ="photo"><img src="/images/costahouse3.jpeg"  alt="costa rica house 2" style="margin-left: 10%;width: 75%"></div>
    <br>
    <p>Mansita Studio is a bright and welcoming studio, part of the Tamarindo Mountain Retreat family of rentals. It is semi-detached to the main house with a private entrance, bathroom and kitchenette.
      The property boasts incredible ocean views and breathtaking sunsets with a large shared pool and all nestled in a beautifully jungle landscape and only 5 minutes away from the center of Tamarindo and the beach! Monthly Rent: $1,244 USD</p>
  </div>
  <div class="footer">
    <div class="link"><a href= "https://github.com/Myannajm/costarica.git">Want to know how we did it? Click here for the code!</a></div>
  </div>
    </div>
</template>
<script>
export default{
    name: 'rental-view'
}
</script>
<style scoped>
h1{
	color: black;
	font-size: 50px;
	font-family: "Lato", sans-serif;
	text-align: center;
}
h2{
	color: black;
	font-size: 25px;
	font-family: "Lato", sans-serif;
	text-align: left;
  margin-left: 10%;
  }
#photo{
  margin-left: auto;
  margin-right: auto;
}
.container{
  text-align: left;
}
.footer{
  background-color: #e3f2fd;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  }
  .link{
  color: black;
  font-size: 20px;
  padding: 5px;
  }
  @media only screen and (max-width:767px){
    #photo{
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>