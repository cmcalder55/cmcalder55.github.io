
import "../../../styles/style.css";

import links from "../../../components/linkMetadata";
import {RepoLink} from "../../../components/Buttons";

export const PathFindingSim = () => {
    return (
        <div>
            <h1>Simulation and Path Planning of an Autonomous Mobile Robot</h1>

            <RepoLink link={links.pathPlanning.url} />

            <p>
                This project aims to simulate a mobile robot and its sensors in MATLAB.
                Two different scenarios were modeled: traversing a hallway using simultaneous
                localization and mapping, and navigating through a space while avoiding obstacles.
                In both situations, sensors are used to gather feedback about the robot's environment
                and automate its navigation to the end goal. Different techniques such as Kalman filtering
                are explored to reduce uncertainty over time and improve navigation speed and accuracy.
            </p>

            <h2>Part 1: Traversing a Hallway with Simultaneous Localization and Mapping (SLAM)</h2>
            <h3>Problem Statement</h3>

            <p>
                Consider a mobile robot moving at a constant velocity with a single degree of freedom in the x direction down a hallway.
                It has a bi-directional range sensor (r) that can sense the door landmarks (L1,L2,L3). The robot also has wheel encoders
                that are used as odometry sensors. The known conditions are:
            </p>

            <ul>
                <li>All discrete-time sensing and state estimation operates with a fixed time-step of 0.1 seconds</li>
                <li>The hallway is 10 meters long, and the robot’s sensing range is 0.5 meters</li>
                <li>The robot moves with a constant velocity of 0.1 m/s</li>
                <li>The robot starts its traversal of the hallway at l = 0 and knows this with high certainty</li>
                <li>The robot drives at constant velocity until it reaches l_terminal = 10 meters</li>
                <li>The landmarks are located at L1 = 2m, L2 = 5m, L3 = 8m; unknown to the robot</li>
                <li>The robot’s odometry measurements are corrupted with zero-mean, additive Gaussian white noise with std. dev. 0.1 m/s</li>
                <li>The range sensor while in range of a landmark are corrupted with zero-mean, additive Gaussian white noise with std. dev 0.01 m</li>
                <li>There is no environmental process noise influencing motion – the robot moves in a completely deterministic manner, but does not know</li>
            </ul>

            <p>
                The goal is to implement SLAM techniques to allow the robot to localize while travelling down the hallway
                with high accuracy by estimating discovered landmark's locations. Batch Linear Least Squares and Kalman
                filtering methods are used in different conditions, using N=1000 trials each. The mean absolute error of
                each method is considered to illustrate the tradeoffs between the offline Least Squares method and online
                Kalman filtering method.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221274763-0e1101f7-8d12-4a32-8fdd-23cd4e7a707f.png" alt="fig 1" />
            </figure>
            <figcaption>Fig.1 - setup of hallway traversal problem.</figcaption>

            <h3>Batch Least-Squares Method</h3>

            <p>
                Batch Least-Squares was used to solve this problem using offline learning. This is done by solving the system of equations for
                Ax = b, where A is an n-by-m matrix of n sensor readings and m system states at each time step. The b vector is an n-by-1
                vector of all raw observations for the odometer and landmark measurements. After all sensor readings have been collected,
                the m-by-1 x vector is solved for, returning the least squares estimates of the robot's position over time and each static
                landmark's position. The odometry measurements are expressed as a function of the difference between consecutive robot position
                states to reduce dimensionality.
            </p>

            <p>
                Batch Least-Squares was used to navigate the hallway using only odometry sensing and using both range and odometry sensing.
                The estimation error of each method was then plotted over time. Using only the odometry measurements, the robot was unable to
                sense the landmarks. Its position as a result was not directly observable, so it was not able to localize using landmarks
                during travel. This caused the estimation error to grow unbounded over time, seen in Fig.2.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221281780-e8cc1d7b-ebae-42fe-a6ce-82f03b1e9be0.png" alt="Fig.2" />
            </figure>
            <figcaption>Fig.2 - Position estimation error over time with batch Least Squares, odometry only.</figcaption>

            <p>
                Using both the range sensor and odometry measurements, the robot was able to sense the landmarks and their locations can be
                included in the system matrix A. This means the robot can estimate the position of the landmarks as well as the robot’s position
                near the landmarks with significantly less error. This is reflected by the parts of the graph between 1.5-2.5 s, 4.5-5.5 s,
                and 7.5-8.5s, showing a reduction in absolute error when a landmark is found. Since the range sensor has 10x the accuracy as
                the odometer, the robot’s estimation is significantly closer to the actual position. This also reduces the robot’s uncertainty
                of all previous observations and the map as well as the rate of error growth over time.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221282384-d4fba694-4b58-48e3-a2ba-6871bc2b556a.png" alt="fig 3" />
            </figure>
            <figcaption>Fig.3 - Position estimation error over time with batch Least Squares, odometry and range sensors.</figcaption>

            <p>
                To test the effect of landmark observation on reducing error, another scenario was considered to close the observation loop.
                Using both sensors, the robot reaches the end of the hallway, then turns around and returns to the origin. Re-observing of
                landmarks makes the robot significantly more robust to uncertainty, since it is using feedback on its previous observations to
                close the open loops created when the robot first observed the landmarks, shown in Fig.4. This allows the robot to make
                corrections to its previous landmark and pose localization. This is shown by the odometry error reducing after turning around
                and driving back down the hallway. After seeing the last landmark, error continues to grow since its initial position is not
                a landmark that can be found by the range sensor.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221282924-af72269e-4a5a-4194-9412-7163bc572a64.png" alt="fig 4" />
            </figure>
            <figcaption>Fig.4 - Position estimation error over time with batch Least Squares and loop closure, odometry and range sensors.</figcaption>

            <h3>Kalman Filtering Method</h3>

            <p>
                This problem can also be solved using online learning by applying a linear discrete-time Kalman filter. Kalman filtering uses
                linear quadratic estimation to get a joint probability distribution for teh variables at each time step. This means the robot
                can use its prior knowledge of previous states to estimate future states. This helps reduce the estimation error over time
                since it is taking new estimates at each time step, in comparison to only making a single prediction as is batch Least-Squares.
                To apply the Kalman filter, a state-space model is applied using a constant-velocity assumption. Due to this assumption, note
                this method cannot be used to explore loop closures because it would break the model; higher order dynamics needed.
            </p>

            <p>
                The Kalman filter method using only odometry readings has a similar trend as the Least-Squares method, but has slightly less
                overall error. This is because the Least-Squares estimate is calculated after all the measurements have been taken, while the
                Kalman filter method updates its estimation as the system evolves over time. This recursive method for measurement processing
                as they arrive means the Kalman filter can make more corrections than the least squares method, reducing the rate of error growth.
                Similar to the Least-Squares method, the Gaussian error from the odometry sensor causes the margin of error to grow over time,
                as shown by the standard deviation graph line. Since the Kalman filter is using corrupted measurements to make predictions,
                the error from the historical measurements compounds.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221316834-e4dd8166-e4fa-4256-974e-423e23059a69.png" alt="fig 5" />
            </figure>
            <figcaption>Fig.5 - Position estimation error over time with Kalman filtering, odometry only.</figcaption>

            <p>
                Since the Kalman filter updates its estimate while observations are being taken, the range sensor significantly reduces absolute
                error. When the robot observes the first landmark with the range sensor, the discovery of this known point allows the robot to
                update all previous estimations to include the localization of the landmarks with the localization of the robot’s position This
                is shown by the large spike and dip in the beginning of the graph.
            </p>

            <p>
                Using both global estimation of its position within the entire environment as well as local estimation of its position relative
                to the landmark within the map, the robot’s uncertainty of all previous measures decreases. When out of range of the landmarks,
                the odometry uncertainty causes the error to start to increase until another landmark is observed. The landmarks can be treated as
                open loop signals, since there is no correction of the error caused by the sensors during the robot’s self-localization and landmark
                localization in the map.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221317213-9d6d7f11-d2a9-472c-8ba7-84544199e87a.png" alt="fig 6" />
            </figure>
            <figcaption>Fig.6 - Position estimation error over time with Kalman filtering, odometry and range sensors.</figcaption>

            <h2>Part 2: Path Planning Through a Room Under Localization Uncertainty</h2>
            <h3>Problem Statement</h3>

            <p>
                The other condition explored in this project is path planning under localization uncertainty. Consider a mobile robot that moves by
                translating in a 2D workspace and is holonomic. It has four range sensors (r) of equal maximum range in the positive and negative x
                and y directions as well as an odometer. The goal is to create a path planning procedure to navigate through this workspace while
                avoiding collisions with static obstacles and managing localization uncertainty. This will be done by using a Rapidly-Exploring
                Random Tree (RRT) algorithm to find a collision-free path to the goal. A Kalman filter is applied for localization predictions over
                each path created by the RRT. This will result in a set of possible paths that can be further filtered to identify the optimal route.
                The following assumptions are made:
            </p>

            <ul>
                <li>The robot is very small and can be modeled as a point</li>
                <li>Set growth distance of 2 meters for each node of the tree</li>
                <li>The tree will grow until a sample reaches the goal region, then terminates</li>
                <li>Each step of the tree represents a single filter update</li>
                <li>The robot sensing an object is equivalent to sensing its own coordinates; creates buffer zone</li>
            </ul>

            <h3>Rapidly-Exploring Random Tree</h3>

            <p>
                One of the biggest challenges with implementing the RRT algorithm is moving efficiently without crashing. The robot’s ability to avoid
                obstacles is dependent on the range and configuration of its sensors. If it takes larger steps towards a random point, there is a
                higher risk of collision. However, this also means the robot can take a more direct, and therefore shorter path to its goal. To account
                for this, this RRT program uses the vector distance between the chosen node and robot’s current pose to find the most direct path. This
                can then be scaled by the provided growth factor to find the ideal amount for the robot to travel towards the random node. This also
                reduces localization uncertainty by using this path as a check for the presence of obstacles.
            </p>

            <p>
                Over multiple runs, the number of RRT instances was 55-65 on average. This makes sense given the robot’s starting and goal positions.
                The robot starts at (5,50) and wants to reach the goal region starting at x = 90. If there were no obstacles, the most direct path would
                be a straight line from (5,50) to (90,50). The robot’s maximum growth distance for the tree is 2 m, so the fewest nodes possible would be
                43. The robot’s uncertainty about the environment means it needs to take smaller steps to “feel” out its surroundings, so it will move
                slower until it starts seeing obstacles and it can make larger movements. The path of shortest distance found over N=1000 runs is shown below.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221320703-fde6bae8-735f-40f5-addd-7f6a24b9f09c.png" alt="fig 7" />
            </figure>
            <figcaption>Fig.7 - Shortest path.</figcaption>

            <h3>Kalman Filtering</h3>

            <p>
                Kalman filtering was used to predict localization uncertainty over each RRT path. This helps eliminate paths with higher uncertainty and
                balances the trade-off between accurate real-time updating and compounding error. The paths of maximum and minimum final uncertainty are
                shown below. The red ellipses represent the localization uncertainty calculated by the filter in the x and y directions at a given node.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221320711-2245b5cd-da52-4ad4-b00e-d9a4d1ce2c19.png" alt="fig 8" />
            </figure>
            <figcaption>Fig.8 - Minimum uncertainty at terminal position.</figcaption>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221320722-68f7ed7c-2327-497c-b0ed-dc4d418e2b24.png" alt="fig 9" />
            </figure>
            <figcaption>Fig.9 - Maximum uncertainty at terminal position.</figcaption>

        </div>
    );
};


