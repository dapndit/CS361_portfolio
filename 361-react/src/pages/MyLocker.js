import React, { useState } from "react";
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";

function clickMe() {
    alert("Plan Saved to MyLocker!");
};


function MyLocker() {
    return (
       <>
    <h2>My Locker</h2>

            <p><button>Create New Routine</button></p>

            <p>Below you will find the plans that you have saved.</p>

            <Collapsible trigger={["Push Pull Legs", <BsChevronDown/>]}>
    <p>The standard push, pull, and leg routine. This is a 6 day routine, hitting 
        each body part twice a week.</p>
        <Collapsible trigger={["Day 1: Chest & Triceps",<BsChevronDown/>]}>
            <p>
            <table>
		<thead>
			<tr>
				<th>Exercise</th>
				<th>Sets</th>
				<th>Rep Range</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Bench Press</td>
				<td>4-5</td>
				<td>8-12</td>
			</tr>
			<tr>
				<td>Incline DB Press</td>
				<td>4-5</td>
				<td>8-12</td>
			</tr>
			<tr>
				<td>Cable Chest Fly</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
			<tr>
				<td>Cable Pull Down</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
			<tr>
				<td>Dips</td>
				<td>3</td>
				<td>Until Failure</td>
			</tr>
			<tr>
				<td>Skull Crushers</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
		</tbody>
	</table>
            </p>
        </Collapsible>

        <Collapsible trigger={["Day 2: Back & Biceps",<BsChevronDown/>]}>
            <p>
            <table>
		<thead>
			<tr>
				<th>Exercise</th>
				<th>Sets</th>
				<th>Rep Range</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Barbell Rows</td>
				<td>4-5</td>
				<td>8-12</td>
			</tr>
			<tr>
				<td>Pull Ups</td>
				<td>3</td>
				<td>Until Failure</td>
			</tr>
			<tr>
				<td>Lat Pulldown</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
			<tr>
				<td>DB Hammer Curls</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
			<tr>
				<td>Spider Curls</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
			<tr>
				<td>Seated Incline DB Curls</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
		</tbody>
	</table>
            </p>
        </Collapsible>

        <Collapsible trigger={["Day 3: Legs",<BsChevronDown/>]}>
            <p>
            <table>
		<thead>
			<tr>
				<th>Exercise</th>
				<th>Sets</th>
				<th>Rep Range</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Barbell Squats</td>
				<td>4-5</td>
				<td>6-8</td>
			</tr>
			<tr>
				<td>Leg Extensions</td>
				<td>3</td>
				<td>Until Failure</td>
			</tr>
			<tr>
				<td>Leg Press</td>
				<td>3</td>
				<td>8-12</td>
			</tr>
			<tr>
				<td>Hamstring Curls</td>
				<td>3</td>
				<td>12-15</td>
			</tr>
			<tr>
				<td>DB Bulgarian Split Squats</td>
				<td>3</td>
				<td>8-12</td>
			</tr>
			<tr>
				<td>Calf Raises</td>
				<td>3</td>
				<td>Until Failure</td>
			</tr>
		</tbody>
	</table>
            </p>
        </Collapsible>
    <button onClick={clickMe}><p>Edit</p></button>
    <button onClick={clickMe}><p>Delete</p></button>
    </Collapsible>

    </>
    )
}

export default MyLocker