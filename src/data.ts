import {Food} from '../src/app/shared/models/food';
import { Tag } from './app/shared/models/tag';

export const sample_food:Food[]=[
    {
        id: '1',
        name: 'Pizza',
        price: 9.99,
        tags: ['Italian', 'Fast Food'],
        favorite: true,
        stars: 4,
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/94/0a/7c/yaaayyyy.jpg?w=600&h=-1&s=1',
        origins: ['Italy'],
        cookTime: '30 min'
    },
    {
        id: '2',
        name: 'Sushi',
        price: 12.5,
        tags: ['Japanese', 'Seafood'],
        favorite: false,
        stars: 5,
        imageUrl: 'https://www.allrecipes.com/thmb/XT7-9MROYJZvNyQR4J40HGOVDmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg',
        origins: ['Japan'],
        cookTime: '1 hour'
      },
      {
        id: '3',
        name: 'Burger',
        price: 8.49,
        tags: ['American', 'Fast Food'],
        favorite: true,
        stars: 2,
        imageUrl: 'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg',
        origins: ['United States'],
        cookTime: '20 min'
      },
      {
        id: '4',
        name: 'Pasta',
        price: 11.25,
        tags: ['Italian', 'Pasta'],
        favorite: true,
        stars: 4,
        imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1615916524567.jpeg',
        origins: ['Italy'],
        cookTime: '25 min'
      },
      {
        id: '5',
        name: 'Tacos',
        price: 10.75,
        tags: ['Mexican', 'Street Food'],
        favorite: false,
        stars: 3,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5EES5kYkTL7ANrfNV3GgOO_pwqqJeBn9Rg&s',
        origins: ['Mexico'],
        cookTime: '35 min'
      },
      {
        id: '6',
        name: 'Sushi Roll',
        price: 14.99,
        tags: ['Japanese', 'Seafood'],
        favorite: true,
        stars: 5,
        imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2023/05/Vegetarian-Sushi-Rolls-9707-I-1.jpg',
        origins: ['Japan'],
        cookTime: '45 min'
      },
      {
        id: '7',
        name: 'Pie',
        price: 19.99,
        tags: ['American', 'Piehouse'],
        favorite: false,
        stars: 4,
        imageUrl: 'https://www.southernliving.com/thmb/qGCuvB0_nYYqg-fhTwSzLQWhX2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grape-Pie-3x4-920-fa13300f9b4c4dff9d479948080e077c.jpg',
        origins: ['United States'],
        cookTime: '30 min'
      },
      {
        id: '8',
        name: 'Ramen',
        price: 9.5,
        tags: ['Japanese', 'Noodles'],
        favorite: true,
        stars: 5,
        imageUrl: 'https://www.justonecookbook.com/wp-content/uploads/2023/04/Spicy-Shoyu-Ramen-8055-I-500x375.jpg',
        origins: ['Japan'],
        cookTime: '40 min'
      },
      {
        id: '9',
        name: 'Chicken Tikka Masala',
        price: 12.99,
        tags: ['Indian', 'Curry'],
        favorite: true,
        stars: 3,
        imageUrl: 'https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg',
        origins: ['India'],
        cookTime: '50 min'
      },
      {
        id: '10',
        name: 'Fish and Chips',
        price: 13.75,
        tags: ['British', 'Seafood'],
        favorite: false,
        stars: 1,
        imageUrl: 'https://images.jdmagicbox.com/quickquotes/listicle/listicle_1694060623004_5wx3c_657x466.jpg',
        origins: ['United Kingdom'],
        cookTime: '35 min'
      },
      {
        id: '11',
        name: 'Pho',
        price: 11.99,
        tags: ['Vietnamese', 'Soup'],
        favorite: true,
        stars: 4,
        imageUrl: 'https://www.allrecipes.com/thmb/Cvx-KcXYxz7a_vdOy8ptLH1JXes=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4997893-vegetarian-pho-vietnamese-noodle-soup-Buckwheat-Queen-4x3-1-bf6dce29cc8643798007a77216a85077.jpg',
        origins: ['Vietnam'],
        cookTime: '2 hours'
    },
    {
      id: '12',
      name: 'Egg Biryani',
      price: 22.5,
      tags: ['Spicy', 'Indian'],
      favorite: true,
      stars: 4,
      imageUrl: 'https://vaya.in/recipes/wp-content/uploads/2019/01/Hyderabadi-Egg-Dum-Biryani.jpg',
      origins: ['India'],
      cookTime: '1 hour'
  }
];

export const sample_tags:Tag[]=[
  {name:'All',count:12},
  {name:'Fast Food',count:2},
  {name:'Italian',count:2},
  {name:'Japanese',count:3},
  {name:'Seafood',count:3},
  {name:'American',count:2},
  {name:'Indian',count:2}
];