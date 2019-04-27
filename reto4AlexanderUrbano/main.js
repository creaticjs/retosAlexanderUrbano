
var search = new Vue({
    el: "#search",
    data: {
        txtTitle: "",
        select:""
    },
    methods: {
        getData: function () {
            article.getAllData();
        },

        getAllNew:function(){
            article.getAllNews();
        }
    },

});

var article = new Vue({
    el: "#article",
    data: {
        fecha:Date().short,
        newArticle: []
    },
    methods: {
        getAllData: function () {
            console.log("titulo: " + search.txtTitle)
            fetch(
                `https://newsapi.org/v2/everything?q=${search.txtTitle}&pageSize=99&apiKey=a88cf4dbd15a408c8aaacb5104da4238`
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    article.newArticle = data.articles;
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        },

        getAllNews: function () {
            console.log("titulo: " + search.txtTitle)
            fetch(
                `https://newsapi.org/v2/everything?q=apple&from=2019-04-12&to=2019-04-12&sortBy=popularity&pageSize=99&apiKey=a88cf4dbd15a408c8aaacb5104da4238`
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    article.newArticle = data.articles;
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        },

        getArticle: function (id) {
            console.log("TRATANDO DE OBTENER EL ID: "+id);
            window.open(id, 'nuevaVentana', 'width=300, height=400')

        },

        loader: function () {
            fetch(
                `https://newsapi.org/v2/top-headlines?country=co&category=technology&pageSize=99&apiKey=a88cf4dbd15a408c8aaacb5104da4238`
            ).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                article.newArticle = data.articles;
            }).catch(function (error) {
                console.log(error.message);
            });
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                this.loader();
            }
        }
    }

});





/* var datos;
 function getP(url) {
     return new Promise(function (resolve, reject) {
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function () {
             if (this.readyState == 4) {
                 if (this.status == 200) {
                     resolve(JSON.parse(this.responseText));
                 } else {
                     reject("Error: " + this.status);
                 }
             }
         };
         xhttp.open("GET", url);
         xhttp.send();
     });
 }
 async function getAllData() {
     var txt = document.getElementById("txtTitle").value;
     var arrUrl = [`https://newsapi.org/v2/everything?q=${txt}&apiKey=a88cf4dbd15a408c8aaacb5104da4238`];
     var promesas = arrUrl.map(function (url) {
         return getP(url);
     });
     try {
         console.log(promesas);
         var articles = await Promise.all(promesas);
         datos = articles;
         datos[0].articles.forEach(function (w) {
             console.log(w);
             var info = '';
             console.log(datos[0].articles.length);
             document.getElementById("peli").innerHTML += crearTar(w);
         });
     } catch (error) {
         console.error(error);
     }
     //APIKEY NEWSAPI:a88cf4dbd15a408c8aaacb5104da4238

 }

 function crearTar(w) {
     return `<div width='20%'>
                 <h1>${w.author} </h1>
                 <img src=${w.urlToImage} height='120rem'>
                 <p>${w.description}</P>
             </div>`;
 }*/

