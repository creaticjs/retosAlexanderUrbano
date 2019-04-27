Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

Vue.component("detail-customer", {
    props: ['customer'],
    template: `
    <div style="border: 1px solid black;" class="col-md-12">
        <h3>Información del cliente</h3>
        <label>Tipo Documento: {{ customer.typeId }}</label><br>
        <label>Número Documento: {{ customer.numberId }}</label><br>
        <label>Nombre: {{ customer.nameCustomer }} {{ customer.lastNameCustomer }}</label><br>   
        <label>Email: {{ customer.emailCustomer }}</label>
    </div>`
});


var app = new Vue({
    el: '#app',
    data: {
        products: [{
            idProd: 1,
            nameProd: 'Hamburguesa sencilla',
            priceProd: 7300,
            tax: 19,
        },
        {
            idProd: 2,
            nameProd: 'Hamburguesa especial',
            priceProd: 8900,
            tax: 19,
        },
        {
            idProd: 3,
            nameProd: 'Hamburguesa doble',
            priceProd: 12900,
            tax: 19,
        }
        ],
        customers: [{
            typeId: 'CC',
            numberId: 1061890543,
            nameCustomer: 'Alexander',
            lastNameCustomer: 'Urbano',
            emailCustomer: 'dealexurbano@gmail.com'
        },
        {
            typeId: 'CC',
            numberId: 7345902,
            nameCustomer: 'David',
            lastNameCustomer: 'Muñoz',
            emailCustomer: 'david@hotmail.com'
        }
        ],
        /* Customer attributes */
        typeId: '',
        numberId: 0,
        nameCustomer: '',
        lastNameCustomer: '',
        emailCustomer: '',
        /* Product attributes */
        idProd: 0,
        nameProd: '',
        priceProd: 0,
        tax: 0,
        facturacion: {
            customerSelcted: {
                numberId: '',
            },
            productSelected: {
                idProd: '',
                cantidad: 1
            },
            productsAdd: []
        },
        factura: [],
        idInvoice: 1,
    },
    methods: {
        addProduct: function () {
            var productSelected = this.facturacion.productSelected,
                existe = this.facturacion.productsAdd.find(function (el) {
                    return el.idProd == productSelected.idProd;
                });

            if (!existe) {
                this.facturacion.productsAdd.push({
                    idProd: productSelected.idProd,
                    nameProd: productSelected.nameProd,
                    priceProd: productSelected.priceProd,
                    tax: productSelected.tax,
                    cantidad: productSelected.cantidad
                });
            } else {
                var lineaFactura = this.facturacion.productsAdd.find(function (el) {
                    if (el.idProd == productSelected.idProd) {
                        return el.cantidad;
                    }
                });

                lineaFactura.cantidad = parseInt(lineaFactura.cantidad) +
                    parseInt(productSelected.cantidad);
            }
        },

        infocustomerSelected: function () {
            var customer = this.facturacion.customerSelcted.numberId;
            if (customer) {
                info = this.customers.find(function (cust) {
                    if (cust.numberId == customer) {
                        return cust;
                    }
                });
                this.facturacion.customerSelcted.typeId = info.typeId;
                this.facturacion.customerSelcted.numberId = info.numberId;
                this.facturacion.customerSelcted.nameCustomer = info.nameCustomer;
                this.facturacion.customerSelcted.lastNameCustomer = info.lastNameCustomer;
                this.facturacion.customerSelcted.emailCustomer = info.emailCustomer;
            }
        },
        infoproductSelected: function () {
            var product = this.facturacion.productSelected.idProd;
            if (product) {
                info = this.products.find(function (prod) {
                    if (prod.idProd == product) {
                        return prod;
                    }
                });
                this.facturacion.productSelected.nameProd = info.nameProd;
                this.facturacion.productSelected.priceProd = info.priceProd;
                this.facturacion.productSelected.tax = info.tax;
            }
        },


        eliminarLinea: function (indice) {
            this.facturacion.productsAdd.splice(indice, 1);
        },

        addCustomer: function (type, number, name, lastName, email) {
            this.customers.push({
                typeId: type,
                numberId: number,
                nameCustomer: name,
                lastNameCustomer: lastName,
                emailCustomer: email
            });
        },

        addProd: function (id, name, price, taxP) {
            this.products.push({
                idProd: id,
                nameProd: name,
                priceProd: price,
                tax: taxP,
            });
            console.log(this.products);
            this.infoproductSelected();
        },

        saveInvoice: function () {
            this.factura.push({
                idInvoice: this.idInvoice,
                facture: this.facturacion.productSelected,
            });
            this.idInvoice++;
            this.facturacion.productsAdd=[];
            this.facturacion.productSelected={};

            console.log(this.factura);

        }
    },
    computed: {
        totalLineas: function () {
            var total = 0;
            this.facturacion.productsAdd.forEach(function (el) {
                total += el.cantidad * el.priceProd * ((el.tax / 100) + 1);
            });
            return (total).formatMoney(2, '.', ',');
        }
    }
});