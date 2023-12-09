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
         <p>Go to Home and select "Create New Routine". You will be redirected another page, where
            you will be able to give your routine a name, description, and enter 6 exercises,
            including sets, and reps.
         </p>
         </Collapsible>

         <Collapsible trigger={["I made a mistake! Can I make changes to a routine?", <BsChevronDown/>]}>
         <p>Under MyLocker you will find all your workout routines. Once you find the routine that you would 
            like to make changes to simply click on the routine to expand it, and then click on the edit 
            button to make changes. Once you have made your changes, click save. 
         </p>
         </Collapsible>

         <Collapsible trigger={["How do I delete a workout routine from MyLocker?", <BsChevronDown/>]}>
         <p>Go to MyLocker and click to expand on the routine you would like to delete.  At the bottom of the dropdown, you will
            see a delete button. Select it, and the routine will be removed.
         </p>
         </Collapsible>

         <Collapsible trigger={["How do I delete an exercise from my workout routine", <BsChevronDown/>]}>
         <p>Go to MyLocker and click to expand on the routine containing the exercise you would like to delete.  
            You will see a delete button next to the exercise. Select it, and the routine will be removed.
         </p>
         </Collapsible>

         <Collapsible trigger={["I don't know where or how to begin!", <BsChevronDown/>]}>
         <p>This is exactly why we are here. Navigate to the Explore Exercises page to view the most popular exercises based on
            the muscle group you want to focus on. Select the muscle group and search. After viewing your results,
            you can even go to another site to learn more about the exercise.

            Once you are ready, go to the home page and click on Create Routine to create your new routine. 
         </p>
         </Collapsible>
    </>
    )
}

export default faq