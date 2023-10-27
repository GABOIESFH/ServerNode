const express=	require("express");
const app=express();
const port= 4000;
const cors=	require("cors");

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'UPDATE']
    }));

const final = [
	{
		clase: "guerrero",
		atributos: {
			fuerza: 15,
			destreza: 20,
			inteligenia: 10,
			carisma: 13,
			suerte: 8
		},
		armas:["hacha", "espada", "escudo"]	
	},
	{
		clase: "paladin",
		atributos: {
			fuerza: 14,
			destreza: 15,
			inteligenia: 16,
			carisma: 20,
			suerte: 12
		},
		Armas:["baculo", "espada", "escudo"]
	},
    {
		clase: "king",
		atributos: {
			fuerza: 25,
			destreza: 9,
			inteligenia: 35,
			carisma: 30,
			suerte: 30
		},
		Armas:["corona", "caballos", "guardias"]
	}
]


app.get('/',function(req,res) { 
    res.json(final);
});



app.listen(port);