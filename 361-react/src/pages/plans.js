import React, { useState } from "react";
import Collapsible from 'react-collapsible';
import { BsChevronDown } from "react-icons/bs";

function clickMe() {
    alert("Plan Saved to MyLocker!");
};

function Plans() {
    return (
       <>
    <h2>Plans</h2>
    <p>Below you will find some of the more popular common workout routines.</p>
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
        <button onClick={clickMe}>Add to MyLocker</button>
    </Collapsible>
    
    
    <Collapsible trigger={["Arnold Split", <BsChevronDown/>]}>
    <p>Famously used by Arnold Schwarzenegger himself, this is one of the best programs for upper body development.</p>
    <Collapsible trigger={["Day 1: Chest & Back",<BsChevronDown/>]}>
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
				<td>Barbell Bench Press</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Barbell Incline Bench Press</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
                <td>DB Pullovers</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
                <td>Chin Up</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Bent Over Row</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Crunches</td>
				<td>5</td>
				<td>25</td>
			</tr>
		</tbody>
	</table>
            </p>
        </Collapsible>

        <Collapsible trigger={["Day 2: Shoulders & Arms",<BsChevronDown/>]}>
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
				<td>Barbell Bench Press</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Barbell Incline Bench Press</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
                <td>DB Pullovers</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
                <td>Chin Up</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Bent Over Row</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Crunches</td>
				<td>5</td>
				<td>25</td>
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
				<td>Squats</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Lunge</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
                <td>Leg Curls</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
                <td>Good Mornings</td>
				<td>3-4</td>
				<td>10</td>
			</tr>
			<tr>
				<td>Standing Calf Raise</td>
				<td>3-4</td>
				<td>15</td>
			</tr>
			<tr>
				<td>Crunches</td>
				<td>5</td>
				<td>25</td>
			</tr>
		</tbody>
	</table>
            </p>
        </Collapsible>

        <button></button>
    </Collapsible>


    </>
    );
};

export default Plans