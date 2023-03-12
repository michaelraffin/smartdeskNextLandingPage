import React, { Component } from 'react';
import PropTypes from 'prop-types';
let FaqItems = [
    {
        title: "What is the difference between a single motor and dual motor standing desk",
        answer:"A Black bottle shaped sits under the table is a Single Motor, slow interaction"
    },{
        title: "What is the weight capacity of your standing desks?",
        answer:"100kg"
    },
    {
    title: "What is the height range of your standing desks",
    answer:"125cm"
},
{
title: "How long does it take to assemble your standing desk",
answer:"1 person can take up to 20-30mns, 2 persons 10-15mns"
},
{
title: "What types of wood do you use for your standing desks",
answer:"We have Mahogany, Acacia and Mahogany Jointer."
},
{
title: "Can I customize the size or color of my standing desk",
answer:"Yes, we also have color pallete to guide the customer."
},
{
title: "How do I clean and maintain my standing desk",
answer:"Don't apply any hard solution, Don't put any sharp object that will cause scratching the table top. Place a cover matt in the surface and wipe gengle with water."
},
{
title: "Do you offer any warranty or guarantee for your standing desks",
answer:"1 Year warranty for table wood top and 2 years Factory Waranty for table frame"
},
{
title: "Do you offer any discounts or promotions for bulk orders?",
answer:"Yes, for 10 table frame and above. we also have a monthly promotions in our different platform."
},
{
title: "How long does it take for my order to arrive?",
answer:"2-3 weeks if you buy a table set, our Table Top were custom built specifically for customer specification."
},
{
title: "What is your return and refund policy",
answer:"Yes, follow this link. www.smartdeskph.com/policy"
},
// {
// title: "",
// answer:""
// },
// {
// title: "",
// answer:""
// },
// {
// title: "",
// answer:""
// },
// {
// title: "",
// answer:""
// }
]
const renderCOmponent =(item)=>{
        return (
            <details
            class="group border-l-4 border-gray-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary class="flex items-center justify-between cursor-pointer">
              <h2 class="text-lg font-medium text-gray-900">
                {item.title}
              </h2>
        
              <span
                class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </summary>
        
            <p class="mt-4 leading-relaxed text-gray-700">
            {item.answer}
            </p>
          </details>
        )    
}
class FAQ extends Component {
      
    render() {
        return (
            <div className='ml-60 mr-60 mb-40'>
                  <section class="relative pb-24">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div class="py-24 md:py-36">
            <h1 class="mb-5 text-6xl font-bold text-white">
              FAQ's
            </h1>
            <div class="space-y-4">
                {FaqItems.map(item=> {
                    return renderCOmponent(item)
                })}
  {/* <details
    class="group border-l-4 border-gray-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary class="flex items-center justify-between cursor-pointer">
      <h2 class="text-lg font-medium text-gray-900">
      What is the difference between a single motor and dual motor standing desk
      </h2>

      <span
        class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
     A Black bottle shaped sits under the table is a Single Motor, slow interaction
    </p>
  </details> 

  <details
    class="group border-l-4 border-gray-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex items-center justify-between cursor-pointer">
      <h2 class="text-lg font-medium text-gray-900">
      What is the weight capacity of your standing desks?
      </h2>

      <span
        class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-gray-700">
     100kg
    </p>
  </details>*/}
</div>
            </div>
            
            </div>
            </section>
               

            </div>
        );
    }
}

FAQ.propTypes = {

};

export default FAQ;