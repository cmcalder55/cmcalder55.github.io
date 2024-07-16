import { Link } from 'react-router-dom'
import links from "../../../components/linkMetadata";
import {RepoLink} from "../../../components/Buttons";

export const UaRobotics = () => {
    return (
        <div>
            <h1>Underactuated Robotic Gripper</h1>
            <RepoLink link={links.uaHand.url} />
            <p>
                Underactuated robotic gripper research performed through the Advanced Robot Manipulators Laboratory 
                at Stevens Institute of Technology under the guidance of Dr. Long Wang in collaboration with lab members. 
                View the lab webpage here: <Link to="https://longwang.in/">https://longwang.in/</Link>
            </p>
            
            <h2>Background</h2>
            <p>
                This project was focused on creating a low-cost robotic hand that can be attached to a commercial robotic
                 arm for various complex manipulation tasks. The main feature of the design is the underactuation system, 
                 meaning multiple joints can be controlled by one mechanism. Inspired by human biology, underactuation can 
                 be used to create self-adaptive mechanisms, such as in DaVinci's wing design seen below 
                 <Link to="https://en.wikipedia.org/wiki/Self-adaptive_mechanisms/">(source)</Link>
            </p>

            <figure>
                <img src="https://github.com/cmcalder55/automation-and-controls/blob/main/underactuated-robotics/graphics/davinci.jpg?raw=true" alt="wings" />
            </figure>
            <figcaption>Da Vinci's self-adaptive flapping wings.</figcaption>

            <p>
                For robotic gripper designed in this project, tendon-driven underactuation is used to control 8 finger 
                joints using only 2 motors. The manipulator can be positioned and commanded directly by a user. 
                The manipulator uses force and angle sensors to optimize its grasp. Tasks can also be performed autonomously
                 using sensor feedback.
            </p>

            <h2>Simulation</h2>
            <p>
                First, a SolidWorks model of the robotic hand was created. Once the model was approved, a physical prototype 
                was created and attached to a Kinova robotic arm. **Watch the physical prototype in motion 
                <Link to="https://youtube.com/shorts/SLhP_C6LJS4?feature=share/">[here]</Link>.
            </p>

            <figure>
                <img src="https://github.com/cmcalder55/automation-and-controls/blob/main/underactuated-robotics/graphics/SWmodel.png?raw=true" alt="sw model" />
            </figure>
            <figcaption>SolidWorks 3D model.</figcaption>
            <figure>
                <img src="https://github.com/cmcalder55/automation-and-controls/blob/main/underactuated-robotics/graphics/physPrototype.png?raw=true" alt="prototype" />
            </figure>
            <figcaption>Physical prototyping.</figcaption>

            <p>
                The SolidWorks model was then converted to a URDF (Unified Robot Description Format). The URDF model was 
                loaded into the robot simulator program Gazebo and attached to a Kinova arm model (available on their 
                website). For initial testing, a model of a soda can was used as the target. ROS code was written to define 
                each link and joint of the system. Through a RViz controller GUI, the inertia of each joint can be adjusted 
                using a slider or direct inputs.
            </p>

            <figure>
                <img src="https://github.com/cmcalder55/automation-and-controls/blob/main/underactuated-robotics/graphics/overhead.png?raw=true" alt="overhead" />
            </figure>
            <figcaption>Target gripping overhead view.</figcaption>
            <p>
                After choosing the desired end position, a path planning algorithm is used to find the shortest and 
                smoothest path. After the gripper is positioned, it tightens around the object until it receives 
                sufficient force feedback to try and pick up the object. The joint positions and inertias can then be 
                adjusted to optimize its path and grip strength. **See the can being lifted 
                <Link to="https://youtu.be/HWir0G_nYKU/">[here]</Link>.
            </p>
            <figure>
                <img src="https://github.com/cmcalder55/automation-and-controls/blob/main/underactuated-robotics/graphics/front.png?raw=true" alt="lift can"/>
            </figure>
            <figcaption>Target lifting front view.</figcaption>

            <p>
                When the robot was able to successfully pick up the can, further tests were run using a cube and a door handle. 
                This was done to ensure the robot could adjust to a variety of target geometries and angles. This also helped to 
                ensure the simulation modeled the physical sensors correctly, since the manipulation task could also be run in real 
                time with the same commands on the physical system. 
            </p>

        </div>
    );
};
