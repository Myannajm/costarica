<template>
    <div>
    <h1>Your All Inclusive Crash-Course on Moving to Costa Rica </h1>
    <hr> 
    <br>
    <div class="container">
        <p>Thinking about moving to Costa Rica? This tropical paradise is one of the most popular places for expats to retire, study and live. The surfable beaches, natural beauty and abundant wildlife also make it one of the most exciting destinations in the world for adventure seekers. For more information about moving to Costa Rica, check out our guide, below.</p>
    <div id="photo1"><img src="/images/costarica1.jpg" alt="costa rica beachfront" style= "height:400px; width:75%"></div>
    <br>
    <h3>A Snapshot of Costa Rica</h3>
    <hr>
    <h3>Life in Costa Rica</h3>
    <p>Costa Rican culture is a vibrant blend of indigenous heritage and Spanish colonial influence, with a dash of Jamaican, Chinese, and other immigrant cultures lending character and customs. The result is a nation of laid-back, friendly, and happy people. A nation whose official language is Spanish, but where large portions of the populations speak English, Bribri, creole Mekatelyu, and Mandarin Chinese as their first languages.</p>
    <h3>Cost of Living</h3>
    <p>The overall cost of living in Costa Rica is much lower than the cost of living in the United States. In fact, according to Numbeo, consumer prices, rent prices, restaurant prices and grocery prices are all considerably lower than those in the U.S. International Living, a popular magazine detailing the best places in the world to live, retire, travel, and invest, claims that American, Canadian and European expats living in Costa Rica spend less money on a daily basis than they do in their own home countries. The magazine states that <q>a single person can live on between $1,400 and $1,700 a month while many retired couples live well on $2,000 per month and even better on $2,500 to $3,000.</q> Of course, cost of living varies depending on lifestyle choices. Those living in popular tourist destinations can expect to pay more on a daily basis, but overall, newcomers will find the country to be fairly affordable. </p>
    <h3>Weather</h3>
    <p>The warm, tropical weather and beautiful beaches of Costa Rica attract flocks of tourists and newcomers every year. The country has two seasons: the dry season and the rainy season. The rainiest part of the year is typically from May to November, with the majority of the rain falling between September and October. The dry part of the year runs from December through April. The average annual temperature is between 70 degrees and 81 degrees Fahrenheit, making it an exceptionally warm place to live. </p>
    <h3>Safety</h3>
    <p>Costa Rica is fairly safe, however, newcomers must be careful and practice common sense precautions when traveling in the country. The U.S. Department of State advises travelers to exercise increased caution in Costa Rica due to crime. The advisory states that while petty crime is the main threat for visitors in Costa Rica, violent crime does occur in the country. Safety tips include being aware of your surroundings, not displaying signs of wealth and not physically resisting a robbery attempt.</p>
    </div>
    <div class="footer">
      <div class="link"><a href= "https://github.com/Myannajm/costarica.git">Want to know how we did it? Click here for the code!</a></div>
    </div>
    </div>
</template>
<script>
export default{
    name: 'how-view'
}
</script>
<style scoped>
.bg-light {
    background-color: #e3f2fd !important;
  }
  h1{
	color: black;
	font-size: 50px;
	font-family: "Lato", sans-serif;
	text-align: center;
    }

h3{
  color: black;
	font-size: 25px;
	font-family: "Lato", sans-serif;
	text-align: left;
}
.container{
    text-align: left;
}
#photo1{
    margin-left: 25%;
    margin-right: 10%;
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
