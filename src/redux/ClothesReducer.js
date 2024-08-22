import clotheone from '../clothes_images/clothes_one.png';
import clothetwo from '../clothes_images/clothes_two.png';
import clothethree from '../clothes_images/clothes_three.png';
import clothefour from '../clothes_images/clothes_four.jpg';
import clothefive from '../clothes_images/clothes_five.png';
import clothesix from '../clothes_images/clothes_six.png';
import clotheseven from '../clothes_images/clothes_seven.jpg';
import clotheeight from '../clothes_images/clothes_eight.png';
import clothenine from '../clothes_images/clothes_nine.png';
import clothesten from '../clothes_images/clothes_ten.jpg';
import clothestwelve from '../clothes_images/clothes_twelve.jpg';
import clotheseleven from '../clothes_images/clothes_eleven.jpg';
import clothesthirten from '../clothes_images/clothes_thirten.jpg';
import badone from '../clothes_images/bad_one.jpg';
import clothesfourteen from '../clothes_images/clothes_fourteen.jpg';
import clothesfiveteen from '../clothes_images/clothes_fiveteen.jpg';
import shoeone from '../clothes_images/shoe_one.jpg';
import clothesSixteen from '../clothes_images/clothes_sixteen.jpg';
import clothesSeventeen from '../clothes_images/clothes_seventeen.jpg';
import clothesEighteen from '../clothes_images/clothes_eighteen.png';
import clothesNineteen from '../clothes_images/clothes_nineteen.jpg';
import clothesTwenty from '../clothes_images/clothes_tweny.jpg';
import clothesTwentyOne from '../clothes_images/clothes_twenyone.jpg';
import clothesTwentyTwo from '../clothes_images/twenyto.jpg';
import clothesTwentyThree from '../clothes_images/clothes_twenythree.jpg';
import clothesTwentyFour from '../clothes_images/clothes_twenyfour.jpg';
import clothesTwentyFive from '../clothes_images/clothes_twenyfive.jpg';
import clothesTwentySix from '../clothes_images/clothes_twenysix.png';
import clothesTwentySeven from '../clothes_images/clothes_twenyseven.png';
import clothesTwentyEight from '../clothes_images/clothes_twenyeight.jpg';
import clothesTwentyNine from '../clothes_images/clothes_twenynine.jpg';
import clothesThirty from '../clothes_images/clothes_thirty.jpg';
import clothesThirtyOne from '../clothes_images/clothes_thirtyone.jpg';
import clothes_thirtytwo from '../clothes_images/clothes_thirtytwo.png';
const initialState = {
    clothes: [
        {
            id: 1,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'ordinary day',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clotheone,
            price: 59,
            promo: false
          },
          {
            id: 2,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'screaming head',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothetwo,
            price: 59,
            promo: true,
            oldPrice: 99,
            sale: true,
          },
          {
            id: 3,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'youth style',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothethree,
            price: 189,
            sale: false,
            promo: false
          },
          {
            id: 4,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'foxy days',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothefour,
            price: 79,
            promo: true,
            oldPrice: 105,
            sale: false,
            soldout: true,
            galerie: true
          },
          {
            id: 5,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'rainy army',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothefive,
            price: 205,
            sale: false,
            promo: false,
            galerie: true
          },
          {
            id: 6,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'gray jacket',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesix,
            price: 189,
            sale: false,
            promo: false,
            galerie: true
          },
          {
            id: 7,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'boards up',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clotheseven,
            price: 209,
            promo: false,
            related: true
          },
          {
            id: 8,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'simple casual',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clotheeight,
            price: 189,
            promo: false,
            related: true
          },
          {
            id: 9,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'wind hat',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothenine,
            price: 59,
            promo: false,
            related: true
          },
          {
            id: 10,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'rain jacket',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesten,
            price: 229,
            promo: true,
            oldPrice: 289,
            sale: true,
            soldout: false,
            masonary: true
          },
          {
            id: 11,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'hair style',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clotheseleven,
            price: 229,
            promo: false,
            sale: false,
            soldout: false,
            masonary: true
          },
          {
            id: 12,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'dark run',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothestwelve,
            price: 229,
            promo: false,
            sale: false,
            soldout: false,
            masonary: true
          },
          {
            id: 13,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'dark shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesthirten,
            price: 229,
            promo: false,
            sale: false,
            soldout: false,
            masonary: true
          },
          {
            id: 14,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'bad shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: badone,
            price: 79,
            promo: true,
            oldPrice: 105,
            sale: true,
            soldout: false,
            masonary: false,
          },
          {
            id: 15,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'military runners',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: shoeone,
            price: 249,
            promo: false,
            sale: false,
            soldout: false,
            masonary: false,
            rated: 3
          },
          {
            id: 16,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'gray shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesfourteen,
            price: 229,
            promo: false,
            sale: false,
            soldout: false,
            masonary: false,
            rated: 5
          },
          {
            id: 17,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'dance style',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesfiveteen,
            price: 229,
            promo: false,
            sale: false,
            soldout: false,
            masonary: false,
            rated: 4
          },
          {
            id: 18,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'red t shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesSixteen,
            price: 59,
            promo: false
          },
          {
            id: 19,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'cd',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesSeventeen,
            price: 59,
            promo: false
          },
          {
            id: 20,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'running shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesEighteen,
            price: 59,
            promo: false
          },
          {
            id: 21,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'blue jacket',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesNineteen,
            price: 79,
            promo: false
          },
          {
            id: 22,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'dark t shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwenty,
            price: 89,
            promo: false
          },
          {
            id: 23,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'black no1',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentyOne,
            price: 89,
            promo: false
          },
          {
            id: 24,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'voucher',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentyTwo,
            price: 99,
            promo: false
          },
          {
            id: 25,
            quantite: 1,
            shoped: false,
            added: false,
            name: 't shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentyThree,
            price: 99,
            promo: false
          },
          {
            id: 26,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'orange turn',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentyFour,
            price: 99,
            promo: false
          },
          {
            id: 27,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'gray no1',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentyFive,
            price: 102,
            promo: false
          },
          {
            id: 28,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'sneakers',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentySix,
            price: 119,
            promo: false
          },
          {
            id: 29,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'casual t shirt',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentySeven,
            price: 129,
            promo: false
          },
          {
            id: 30,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'military coat',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentyEight,
            price: 189,
            promo: false
          },
          {
            id: 31,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'sky blue',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesTwentyNine,
            price: 189,
            promo: false
          },
          {
            id: 32,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'black and white',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesThirty,
            price: 219,
            promo: false
          },
          {
            id: 33,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'red running shoe',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothesThirtyOne,
            price: 209,
            promo: false
          },
          {
            id: 34,
            quantite: 1,
            shoped: false,
            added: false,
            name: 'sneakers white',
            description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
            image: clothes_thirtytwo,
            price: 114,
            promo: false
          },
    ],
    cart: [],
    trash:[],
    viewed: [],
    wishlist: []
}
const ClothesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'add_to_cart': {
        const selectedProduct = state.clothes.find((clothe) => clothe.id === action.payload.id);
        if (!selectedProduct) return state;
        const updatedProduct = { ...selectedProduct, shoped: true };
        const checkProduct = state.cart.find((clothe) => clothe.id === selectedProduct.id);
        const updatedclothes = state.clothes.map((clothe) =>
            clothe.id === selectedProduct.id ? updatedProduct : clothe
        );
        if (checkProduct) {
            return {
                ...state,
                clothes: updatedclothes,
                cart: state.cart.map((item) =>
                    item.id === selectedProduct.id
                        ? { ...item, quantite: item.quantite + (selectedProduct.quantite || 1) }
                        : item
                ),
            };
        } else {
            return {
                ...state,
                clothes: updatedclothes,
                cart: [...state.cart, { ...updatedProduct, quantite: selectedProduct.quantite || 1 }],
            };
        }
    }    
      case 'view': {
        return(
          {...state,viewed: [action.payload]}
        )
      }
      case 'viteview': {
        return(
          {...state,viewed: []}
        )
      }
      case 'add_to_wish': {
        const item = state.clothes.find((item) => item.id === action.payload.id);
      
        if (item && !state.wishlist.some((wishItem) => wishItem.id === action.payload.id)) {
          item.added = true;
          return {
            ...state,
            wishlist: [...state.wishlist, action.payload],
          };
        }
        return state;
      }
      case 'remove_wish': {
        const item = state.clothes.find((item) => item.id === action.payload.id);
        if (!item) return state;
        const updatedItem = { ...item, added: false };
        const updatedClothes = state.clothes.map((clothe) =>
          clothe.id === item.id ? updatedItem : clothe
        );
        return {
          ...state,
          clothes: updatedClothes,
          wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
        };
      }
      
      case 'add_quantite':
      return {
        ...state,
        clothes: state.clothes.map((c) => {
          if (c.id === action.payload) {
            return {
              ...c,
              quantite: c.quantite + 1,
            };
          }
          return c;
        }),
        viewed: state.viewed.map((c) => {
          if (c.id === action.payload) {
            return {
              ...c,
              quantite: c.quantite + 1,
            };
          }
          return c;
        }),
      };
      case 'add_quantite_cart':
            return {
                ...state,
                cart: state.cart.map(f => {
                  if (f.id === action.payload) {
                    return {
                      ...f,
                      quantite: f.quantite + 1
                  };
              }
              return f;
                })
            };
      case 'minuce_quantite':
        return {
          ...state,
          clothes: state.clothes.map((c) => {
            if (c.id === action.payload && c.quantite > 1) {
              return {
                ...c,
                quantite: c.quantite - 1,
              };
            }
            return c;
          }),
          viewed: state.viewed.map((c) => {
            if (c.id === action.payload && c.quantite > 1) {
              return {
                ...c,
                quantite: c.quantite - 1,
              };
            }
            return c;
          }),
        };      
        case 'minuce_quantite_cart':
          return {
            ...state,
            cart: state.cart.map(f => {
              if (f.id === action.payload && f.quantite > 1) {
                return {
                  ...f,
                  quantite: f.quantite - 1
              };
          }
          return f;
            })
        };
        case 'remove_cart': {
          const removedProduct = state.cart.find((clothe) => clothe.id === action.payload);
          if (!removedProduct) {
            return state;
          }
          const updatedProduct = { ...removedProduct, shoped: false };
          const updatedClothes = state.clothes.map((clothe) =>
            clothe.id === removedProduct.id ? updatedProduct : clothe
          );
        
          return {
            ...state,
            clothes: updatedClothes,
            cart: state.cart.filter((clothe) => clothe.id !== action.payload),
            trash: [...state.trash, removedProduct],
          };
        }
        
          case 'remove_trash':
            const selectedProduct_trash = state.trash.find((clothe) => clothe.id === action.payload);
            return {
                ...state,
                trash: state.trash.filter(function(product) {
                    return product.id !== action.payload;
                }),
                cart: [...state.cart, selectedProduct_trash],
            };
        default:
            return state;
    }
};

export default ClothesReducer;

