import "../App.css";
import React from 'react';
import FFG1 from '../resources/FFG1.jpg';
// import FFG2 from '../resources/FFG2.jpg';
import FFG3 from '../resources/FFG3.jpg';
import FFG4 from '../resources/FFG4.jpg';
import CM1 from '../resources/CM1.jpg';
import CM2 from '../resources/CM2.jpg';
import MR1 from '../resources/MR1.jpg';
import MR2 from '../resources/MR2.jpg';
import MR3 from '../resources/MR3.jpg';
import RM11 from '../resources/RM11.jpg';
import RM14 from '../resources/RM14.jpg';
import RM16 from '../resources/RM16.jpg';
import RM21 from '../resources/RM21.jpg';
import RM22 from '../resources/RM22.jpg';
import RM23 from '../resources/RM23.jpg';
import sellit1 from '../resources/sellit1.jpg';
import sellit2 from '../resources/sellit2.jpg';
import sellit3 from '../resources/sellit3.jpg';



const Projects = () => {

  return (
    <div>
      <div class="bg-blue-100">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-1">
            <div class="bg-white shadow rounded-lg p-6">
              <div class="col-span-4 sm:col-span-9">
                {/* <div class="bg-white shadow rounded-lg p-6"> */}


                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Fax For Gaza</h2>
                  <p class="text-gray-600 text-center font-merriweather">A representative lookup tool with PDF generator.</p>
                  <p class="text-gray-500 text-center font-merriweather">React, Google API, PDF Generator (react-pdf)</p>
                  <br></br>
                  <p class="text-gray-700 font-merriweather">I built this app to help more people access materials with which to contact their representatives in congress to support a ceasefire in Gaza. It uses the Google Civic Information API to find representatives and then uses that information to generate PDFs unique to each user. For privacy, all processing is done client-side and no information is saved.
                  </p>
                  {/* <br></br> */}
                  
                  <div class="flex justify-center items-center gap-6 my-6">
                    <div>
                      <a class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-700 border-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-white mt-4 lg:mt-0 font-merriweather" aria-label="Fax For Gaza" href="http://faxforgaza.com" target="_blank" rel="noopener noreferrer">Live Application</a>
                    </div>
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Fax For Gaza Repo" href="https://github.com/loren-michael/faxforgaza" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </div>
                  
                  <br></br>
                  {/* <br></br>
                  <br></br> */}
                  {/* <div class="flex justify-center items-center gap-6 my-6">
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Recipe Manage 1 Demo" href="https://youtu.be/93D8D1Pqez8" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                      <path fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                      </path>
                    </svg>
                    </a>
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Recipe Manager 1 Repo" href="https://github.com/loren-michael/phase-1-project" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </div> */}
                  {/* <YouTube 
                    videoId="93D8D1Pqez8" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="recipe v1 video"
                  />                  */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <span>
                      <img class="h-auto max-w-full rounded-lg" src={ FFG1 } alt="Fax For Gaza Home"/>
                    </span>
                    {/* <div>
                      <img class="h-auto max-w-full rounded-lg" src={ FFG2 } alt="Fax For Gaza 2 Form"/>
                    </div> */}
                    <span>
                      <img class="h-auto max-w-full rounded-lg" src={ FFG3 } alt="Fax For Gaza Rep Display"/>
                    </span>
                    <span>
                      <img class="h-auto max-w-full rounded-lg" src={ FFG4 } alt="Fax For Gaza Links"/>
                    </span>
                  </div>
                </div>

                  <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"></hr>

                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Sell It!</h2>
                  <p class="text-gray-600 text-center font-merriweather">eCommerce site</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React, Redux</p>
                  <br></br>
                  <p class="text-gray-700 font-merriweather">This app allows users to buy and sell audio gear. Simliar to eBay or Etsy. Users are authenticated, validations exist for all new items, and carts can be modified until the point of purchase.
                  <br></br>
                  </p>
                  <div class="flex justify-center items-center gap-6 my-6">
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Sell It! Demo" href="https://youtu.be/4cvZbOYlLcg" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                      <path fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                      </path>
                    </svg>
                    </a>
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Sell It! Repo" href="https://github.com/loren-michael/phase-5-project" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </div>
                  {/* <YouTube
                    videoId="4cvZbOYlLcg"
                    opts={options}
                    onReady={this.pauseVideo()}
                    id="sellit video"
                  /> */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ sellit1 } alt="Sell It! Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ sellit2 } alt="Sell It! Signup"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ sellit3 } alt="Sell It! Item Description"/>
                    </div>
                  </div>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"></hr>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Movie Rental App</h2>
                  <p class="text-gray-600 text-center font-merriweather">Movie rental database site</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React</p>
                  <br></br>
                  <p class="text-gray-700 font-merriweather">This app was meant to go a little deeper into my understanding of Ruby on Rails, while also applying useContext to access state from a central location. Also includes validations and authentication for users using bcrypt.
                  <br></br>
                  </p>
                  <div class="flex justify-center items-center gap-6 my-6">
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Movie Rental Demo" href="https://youtu.be/NlN0V4Bq_yM" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                      <path fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                      </path>
                    </svg>
                    </a>
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Movie Rental Repo" href="https://github.com/loren-michael/phase-4-project-final" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </div>
                  {/* <YouTube 
                    videoId="NlN0V4Bq_yM" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="movie rental video"
                  />                 */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ MR1 } alt="Movie Rental Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ MR2 } alt="Movie Rental Unavailable"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ MR3 } alt="Movie Rental Available"/>
                    </div>
                  </div>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"></hr>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Character Manager</h2>
                  <p class="text-gray-600 text-center font-merriweather">D&D Character database</p>
                  <p class="text-gray-500 text-center font-merriweather">Ruby on Rails, React</p>
                  <br></br>
                  <p class="text-gray-700 font-merriweather">This simple app was designed to demonstrate knowledge of Ruby with Sinatra. It allows you to create and manage the levels of D&D characters.
                  <br></br>
                  </p>
                  <div class="flex justify-center items-center gap-6 my-6">
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Character Manager Demo" href="https://youtu.be/IPAvHJ6HqBk" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                      <path fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                      </path>
                    </svg>
                    </a>
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Character Manager Repo" href="https://github.com/loren-michael/phase-3-project-frontend" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </div>
                  {/* <YouTube 
                    videoId="IPAvHJ6HqBk" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="character manager video"
                  />                 */}
                  <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ CM1 }  alt="Character Manager Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ CM2 } alt="Character Manager Create"/>
                    </div>
                    {/* <div>
                      <img class="h-auto max-w-full rounded-lg" src={  } alt=""/>
                    </div> */}
                  </div>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"></hr>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Recipe Manager v2</h2>
                  <p class="text-gray-600 text-center font-merriweather">Simple recipe manager</p>
                  <br></br>
                  <p class="text-gray-700 font-merriweather">The second app I made is another Recipe Manager - I guess I really wanted to expand on that idea! This time around, I utilized Semantic UI cards to my home page for a better display and also included the ability to "favorite" a recipe and leave a comment.
                  <br></br>
                  </p>
                  <div class="flex justify-center items-center gap-6 my-6">
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Recipe Manager 2 Demo" href="https://youtu.be/7tJt0OAALhk" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                      <path fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                      </path>
                    </svg>
                    </a>
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Recipe Manager 2 Repo" href="https://github.com/loren-michael/phase-2-react-project" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </div>
                  {/* <YouTube 
                    videoId="7tJt0OAALhk" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="recipe v2 video"
                  />                  */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM21 } alt="Recipe Manager 2 Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM22 } alt="Recipe Manager 2 Details"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM23 } alt="Recipe Manager 2 Create"/>
                    </div>
                  </div>
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500"></hr>
                <div class="bg-white shadow rounded-lg p-6">
                  <h2 class="text-xl text-center font-bold mb-4 font-merriweather">Recipe Manager v1</h2>
                  <p class="text-gray-600 text-center font-merriweather">A very simple JS based recipe manager</p>
                  <br></br>
                  <p class="text-gray-700 font-merriweather">This was the first app that I build for a Flatiron project. It uses basic DOM manipulation to show a list of recipes from an included JSON database, and also allows you to add your own recipes to the list. The functionality is very basic, and does not include any validations or the ability to delete recipes without editing the database directly.
                  <br></br>
                  </p>
                  <div class="flex justify-center items-center gap-6 my-6">
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Recipe Manage 1 Demo" href="https://youtu.be/93D8D1Pqez8" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6">
                      <path fill="currentColor"
                          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                      </path>
                    </svg>
                    </a>
                    <a class="text-gray-700 hover:text-blue-600" aria-label="Recipe Manager 1 Repo" href="https://github.com/loren-michael/phase-1-project" target="_blank" rel="noopener noreferrer">
                      <svg stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-6 text-gray-700 hover:text-blue-600">
                        <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </div>
                  {/* <YouTube 
                    videoId="93D8D1Pqez8" 
                    options={options} 
                    onReady={this.pauseVideo()} 
                    id="recipe v1 video"
                  />                  */}
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM11 } alt="Recipe Manager 1 Home"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM16 } alt="Recipe Manager 1 Details"/>
                    </div>
                    <div>
                      <img class="h-auto max-w-full rounded-lg" src={ RM14 } alt="Recipe Manager 1 Create"/>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Projects