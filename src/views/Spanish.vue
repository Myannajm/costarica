<template>
    <div>
        <div class = "formSubmit">
        <form>
          <label><h1>Spanish Word of the Day</h1></label>
          <br>
          <p>(Hint: To those not quite fluent yet, use the Google Chrome browser and right-click to translate the page to English!)</p>
          <!-- <input id="dateSubmit" type="submit" value="Word Generator"></input> -->
        </form>
        <h1>THIS PAGE IS UNDER CONSTRUCTION</h1>
      </div>
      <div class = "flex-container">
        <div class="flex-child-1">
            <div id="wordResults"></div>
        </div>
        <div class="flex-child-2">
            <div id="wordDefinition"></div>
    </div>
    </div>
    <div class="footer">
    <div class="link"><a href= "https://github.com/Myannajm/costarica.git">Want to know how we did it? Click here for the code!</a></div>
    </div>
    </div>
</template>

<script>
export default{
    name: 'spanish-view',
    computed: {},
    methods: {},
}
</script>
<style scoped>
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
    .formSubmit{
        font-family: "Lato", sans-serif;
        text-align: center;
    }
    label{
        font-size: 25px;
    }
    h1{
        color: black;
        font-size: 60px;
        font-family: "Lato", sans-serif;
        text-align: center;
        background-color: antiquewhite;
        margin-top: 2%;
    }
    h2{
        color: black;
        font-size: 25px;
        font-family: "Lato", sans-serif;
        text-align: center;
        margin-top: 3%;
        margin-bottom: 3%;
    }
    .body{
        font-family: "Lato", sans-serif;
        font-weight: bold;  
    }
    .flex-container{
        display: flex;
        justify-content: center;
        margin-bottom: 5%;
    }
    .flex-child-1{
        /* margin-bottom: 5%;
        padding: 25px;
        height: 50%;
        width: 50%; */
        flex: 1;
        /* margin-left: 5%; */
        text-align: center;
    }
    .flex-child-2{
        /* margin-right: 20px; */
        flex: 1;
        justify-content: right;
    }
    
</style>