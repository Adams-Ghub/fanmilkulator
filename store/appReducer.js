 import fanchoco from '../assets/fanchoco.png';
 import fanyogostrawberry from '../assets/fanyogo-strawberry.png';
 import fanice from '../assets/fanice.png';
 import fanicebanana from "../assets/fanicebanana.png";
 import mangopassion from "../assets/mangopassion.png";
 import mangopassionsmall from "../assets/mangopassionsmall.png"
 import fandangoFrozen from "../assets/fandangoFrozen.png";
 import cocopine from "../assets/cocpine.png"
 import fankybanana from "../assets/fankybanana.png"
 import fanvanille from "../assets/fanvanille.png"
 import superyogoPlain from "../assets/superyogoPlain.png"
 import fanmaxStrwb from "../assets/fanmaxStrwb.png"
 import fandangoBottle from "../assets/fandangoBottle.png"
 import superyogolemon from "../assets/superyogolemon.png"
 import fanchocoSmall from "../assets/fanchocoSmall.png"
 import rockybunssmall from "../assets/rockBunsSmall.png"
 import fanyogosmall from "../assets/fanyogoSmall2.png"
 import springrolls from "../assets/springRolls.png"
 import rockBuns from "../assets/rockBuns.png"
 import meatpie from "../assets/pie.png"
 


 const initialState={
     products:[
        {
            name:"Fanyogo Strawberry 145ml",
            id:"0",
            img:fanyogostrawberry,
            cp:"1",
            sp:"1.2",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fanice Pouch 145ml",
            id:"1",
            img:fanice,
            cp:"0.95",
            sp:"1.2",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fanice Banana 145ml",
            id:"2",
            img:fanicebanana,
            cp:"0.95",
            sp:"1.2",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fanchoco 145ml",
            id:"3",
            img:fanchoco,
            cp:"1",
            sp:"1.2",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Mango and Passion",
            id:"4",
            img:mangopassion,
            cp:"1.5",
            sp:"1.8",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Funky Banana",
            id:"5",
            img:fankybanana,
            cp:"1.5",
            sp:"1.8",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Cocopine",
            id:"6",
            img:cocopine,
            cp:"1.5",
            sp:"1.8",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fandango Frozen",
            id:"7",
            img:fandangoFrozen,
            cp:"1",
            sp:"1.2",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fanyogo Strwb (small)",
            id:"8",
            img:fanyogosmall,
            cp:"0.83",
            sp:"1",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fanchoco (small)",
            id:"9",
            img:fanchocoSmall,
            cp:"0.83",
            sp:"1",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Mango and Passion (small)",
            id:"10",
            img:mangopassionsmall,
            cp:"1.25",
            sp:"1.5",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fanvanille",
            id:"11",
            img:fanvanille,
            cp:"0.83",
            sp:"1",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Superyogo Plain",
            id:"12",
            img:superyogoPlain,
            cp:"1.67",
            sp:"2",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Superyogo Lemon",
            id:"13",
            img:superyogolemon,
            cp:"1.67",
            sp:"2",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fanmax Strawberry",
            id:"14",
            img:fanmaxStrwb,
            cp:"3.29",
            sp:"4",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        {
            name:"Fandango bottle",
            id:"15",
            img:fandangoBottle,
            cp:"2.08",
            sp:"2.5",
            booked:"0",
            returned:"0",
            sold:"0"
        },
        
     ],

     pastries:[
         {
             name:"Pie",
             id:"101",
             img:meatpie,
             cp:"0.7",
             sp:"1",
             booked:"0",
             returned:"0",
             sold:"0",
         },
        
        {
            name:"Rock Buns (big)",
            id:"102",
            img:rockBuns,
            cp:"0.7",
            sp:"1",
            booked:"0",
            returned:"0",
            sold:"0",
        },
        {
            name:"Rock Buns (small)",
            id:"103",
            img:rockybunssmall,
            cp:"0.45",
            sp:"0.5",
            booked:"0",
            returned:"0",
            sold:"0",
        },
        {
            name:"Spring Rolls",
            id:"104",
            img:springrolls,
            cp:"0.45",
            sp:"0.5",
            booked:"0",
            returned:"0",
            sold:"0",
        },
        
     ]


 }
 
 function appReducer (state=initialState, action){
     switch (action.type){
        case "ADD_PRODUCT":
            const newProduct={
                name:action.payload.name,
                sp:action.payload.sp,
                cp:action.payload.cp,
                booked:action.payload.booked,
                returned:action.payload.returned,
                sold:action.payload.sold
            }
            return {...state, products:[...state.products, newProduct]};
            break;
                
        case "EDIT_PRODUCT":
            const editedInfo=state.products.map((product)=>{
                if(product.id===action.product_id){
                    return{...product, ...action.updated_product}
                }else{
                    return{...product}
                }
            })
            return {...state, products:editedInfo}
            break;

            case "EDIT_PASTRIES":
                const editedpastries=state.pastries.map((past)=>{
                    if(past.id===action.pastries_id){
                        return{...past, ...action.updated_pastries}
                    }else{
                        return{...past}
                    }
                })
                return {...state, pastries:editedpastries}
                break;

        default:
            return {...state};
     }

 };
 export default appReducer
 