import React from "react";
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";

function faq() {
    return (
       <>
    <h2>Frequently Asked Questions</h2>

       <p> Below you will find a list of frequently asked questions.</p>
       <Collapsible trigger={["How do I add a workout plan to MyLocker?", <BsChevronDown/>]}>
         <p>Go to Plans and click on your desired workout routine. At the bottom of the dropdown, you will
            see an "Add to MyLocker" button. Select it, and the item will automatically be added.
         </p>
         </Collapsible>

         <Collapsible trigger={["How do I create my own routine?", <BsChevronDown/>]}>
         <p>Go to MyLocker and select "Create New Routine". Step-by-step follow the prompts, and
            you will be able to create a routine catered to your needs.
         </p>
         </Collapsible>

         <Collapsible trigger={["I made a mistake! Can I make changes to a routine?", <BsChevronDown/>]}>
         <p>Under MyLocker you will find all your workout routines. Once you find the routine that you would 
            like to make changes to simply click on the routine to expand it, and then click on the edit 
            button to make changes. Once you have made your changes, click save. 
         </p>
         </Collapsible>

         <Collapsible trigger={["How do I delete a workout plan from MyLocker?", <BsChevronDown/>]}>
         <p>Go to Plans and click to expand on the routine you would like to delete.  At the bottom of the dropdown, you will
            see a delete button. Select it, and the routine will be removed.
         </p>
         </Collapsible>
    </>
    )
}

export default faq