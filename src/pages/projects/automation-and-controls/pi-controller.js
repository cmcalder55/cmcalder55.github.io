
import "../../../styles/style.css";
import { Link } from 'react-router-dom'
import links from "../../../components/linkMetadata";
import {RepoLink} from "../../../components/Buttons";

export const PiController = () => {
    return (
        <div>
            <h1>Creating a Custom PI Controller: Self-Tuning of Magneto-Optical Traps</h1>
            {/* Link to GitHub repository */}
            <RepoLink link={links.piCtrl.url} />

            <h2>Abstract</h2>

            <p>
                In recent years the Magneto-Optical Trap (MOT) has become a standard technology used in
                almost every AMO laboratory (Atomic, Molecular, and Optical Physics). While technology of
                individual components has improved over time, the alignment of the trap still requires
                tedious maintenance performed hands-on by skilled experimentalists. The project focuses on
                developing a custom control system for piezoelectric mirror mounts responsible for the
                position adjustment of the lasers beams in the experimental setup. The implementation consists
                of LabVIEW interface and python algorithms, supported by rotary encoders to correct for
                hysteresis of the devices. The control system’s efficiency is tested through fiber coupling,
                typically performed manually, with the overall goal of full automation. This contributes to
                the group’s goal of automating the MOT as a whole, thereby saving time and making experimental
                results more repeatable.
            </p>
            <p>
                The feedback from the LabVIEW controllers is used in the Python program to determine the position
                of the center of the fiber cable and aim the laser. After successful coupling, machine learning
                models are used to evaluate the outputs of the entire experiment and determine the optimal
                experimental inputs. These models also help reveal any correlations between the mirror position,
                laser and fiber coupling, the rate of successful cloud creation, and the characterisitics of any
                resulting atom clouds. By implementing these controllers and evaluation systems, the overall goal
                is to fully automate this process and the experiment as a whole.
            </p>
            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221003815-efa6a6c0-90b8-497f-8649-7989c1379dac.png" alt="Atom cloud experimental output" />
            </figure>
            <figcaption>Fig.1 - MOT atom cloud.</figcaption>

            <h2>Introduction</h2>

            <p>
                Magneto-optical traps (MOTs) use lasers and magnetic fields to cool and slow down atoms.
                Atoms are cooled down to temperatures as low as ~15 uK, which is almost absolute zero.
                Atoms are fed into the experiment where they collide with lasers on the x,y, and z axes.
                The photons in the laser collide with the atoms and cancel out some of their momentum and
                push them towards the laser source. This causes friction on the atoms, slowing them further
                with the Doppler cooling effect. Magnetic fields in a vaccuum chamber are used to pull cooled
                atoms towards the center and create a "trap". Atoms in the experiment are run through the
                phases of this trap system multiple times, with the goal of creating a cloud of atoms that
                is as dense and as cold as possible.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221004177-a649d5be-408b-4add-a1de-870d168458ad.png" alt="photons" />
            </figure>
            <figcaption>Fig.2 - Slowing of atoms with photons.</figcaption>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221004279-67e38c50-2fe4-4a0d-b5a5-44519e4e40cc.png" alt="basic setup" />
            </figure>
            <figcaption>Fig.3 - MOT basic experimental setup.</figcaption>

            <p>
                Slowing down the atoms makes it significantly easier to study the atom's quantum characteristics.
                For example, if you are trying to read the license plate on a car, the slower the car the easier
                it is to read. The same concept applies to quantum properties of atoms. There are many parameters
                that must be controlled to run this experiment, typically requiring multiple skilled experimentalists
                and a huge time investment just to set up. It is very sensitive to environmental variables like ambient
                temperature and light, making it difficult to maintain experimental conditions. Very small changes
                such as microscropic drift over time in parts of the experimental setup can be the difference between
                a successful run and no atom cloud output at all.
            </p>

            <h2>Motivation</h2>
            <p>
                The overall objective of this project was to use automation approaches and optimization and machine learning
                techniques to remove the need for a trained operator to tune the MOT. Tuning by a human operator is extremely
                time consuming, and can take anywhere from six hours to days, with no guarantee of a successful experimental
                output. The experimental set-up is also very crowded and difficult to adjust by hand, and uses high-powered
                lasers that pose a safety risk while making hand adjustments. By automating these mirror mount adjustments
                and making them remotely controllable, the experiment will become easier to repeat and safer for experimentalists
                to run. Significantly reducing the set-up time also allows more runs to be done in the same time frame,
                allowing the group to identify the factors needed to consistently generate an atom cloud.
            </p>

            <p>The individual goals were to:</p>
            <ul>
                <li>Find appropriate transducers to get the relative position of the mirror mount adjusters</li>
                <li>Design and build a mechanism to attach the transducers to the mounts</li>
                <li>Make a LabVIEW program to:</li>
                <ul>
                    <li>Remotely control the mount adjusters</li>
                    <li>Determine their absolute position using the transducers</li>
                </ul>
                <li>Make the control system closed loop to compensate for hysteresis</li>
                <li>Write a Python program to run the LabVIEW program and optimize mirror adjustments</li>
                <li>Use machine learning libraries in Python to analyze experimental outputs and explore coupling profiles</li>
            </ul>

            <h3>Commercial Solutions</h3>
            <p>
                A huge limitation to solving this problem to automatic mount adjustment is the high level of precision
                required and lack of space in the set-up to add transducers. When working on an atomic level, an
                adjustment of a few micrometers can completely misalign a mirror. Stepper motors, for example, can be
                controlled remotely and make fine adjustments, but they are too large and unstable to use.
            </p>
            <p>
                The mirror mounts on the experiment also function using a piezoelectric material, so they have a high
                hysteresis rate and have no built-in compensation system. Inertial actuators can be added to help have
                a more consistent step-size during adjustment, but they still have an open-loop design with up to 20%
                error between steps. The inertial actuators also limit the range of the adjuster screws while doubling
                their profile length, making them unusable.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221067162-e4b907c1-b49d-46b3-b776-b85069d00dd0.png" alt="stepper actuators" />
            </figure>
            <figcaption>Fig.4 - Stepper motor actuators.</figcaption>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221067178-014d4d5e-230f-4ea5-a7a6-fded2ba032ac.png" alt="inertial actuators" />
            </figure>
            <figcaption>Fig.5 - Inertial actuators.</figcaption>

            <h3>Repeatability Trade-Off</h3>
            <p>
                The piezoelectric mirror mounts come with a controller that can be operated remotely, but the controls
                are not customizable to the level needed for this experiment, and the screw distance travelled is not
                repeatable. However, it is possible to make very fine adjustments manually due to the piezoelectric effect.
                This also has the advantage of being self-locking while at rest or while no power is applied, but the
                adjustments made to get to a position are not repeatable. This is due to a variety of reasons such as variation
                between mount components, variable friction when turning the screw forwards or backwards, and high hysteresis
                when making steps of the same size.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221071064-5f829c2e-c6f8-4291-ab29-ee9ce9c2edb1.png" alt="directional step mag" />
            </figure>
            <figcaption>Fig.6 - Example of difference between forward and reverse step sizes of same input magnitude.</figcaption>

            <h2>Methods</h2>
            <Link
                to="https://github.com/cmcalder55/ctrl_systems_ML_research/blob/main/LV_code_and_guide/Mount_Control_VI_Guide_2.pdf">
                Detailed descriptions of every component in the system and their function can be found **HERE**
            </Link>

            <p>
                To compensate for this error, small rotary encoders were inserted into the adjuster screws and attached
                to the mount using existing screw holes. The 360 degree turn of the screw is proportional to the 0-5 V.
                output of the rotary encoder, giving the relative position of the screw. This information can then be
                used to create a feedback system using a custom P.I. controller to automatically correct positional error,
                as well as define and map the global screw position to utilize the full range of adjustments.
            </p>
            <p>
                This design is better than the commerical alternatives because the transducers have a small profile
                and highly accurate. The wiring system is simple (power, groud, output) and outputs an analog voltage
                signal, making it easy to read into LabVIEW and make an effective automated controller. This solution
                is also not exclusive to the mounts used in this experiment, and could be added to a wide range of
                products that have high hysteresis.
            </p>
            <p>
                Position commands are input into Python, which are then fed into LabVIEW using a TCP connection.
                The LabVIEW controller communicates with the native mount controller to move the screws and scale
                the step size to reach the desired point. A homing mode was also added to set the global origin of
                the adjuster screws and define the full range of the screw. The absolute position is stored to an
                external file, so it does not need to be re-callibrated. This is important because the controller
                still tries to move the screw even if it cannot be turned anymore. This can cause damage to the
                equipment, so it is necessary to know when a screw is approaching the end of its range. The homing
                system is summarized in Fig. 7 below.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221064107-aead4971-6fdb-46fe-85ea-6436184debf2.png" alt="homing" />
            </figure>
            <figcaption>Fig.7 - Homing mode control system diagram.</figcaption>

            <p>To move the mirrors the following steps are taken:</p>
            <ul>
                <li>User inputs desired position</li>
                <li>Average transducer voltage is converted to degrees</li>
                <li>PI controller scales n steps based on direction (P) and degree difference (I)</li>
                <li>Adjuster screw is moved 20% of n steps and degree error is checked</li>
                <li>Continues until error is within desired range of user input</li>
                <ul>
                    <li>If within range, set steps needed to 0</li>
                </ul>
            </ul>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221063997-f3c0454c-bd5e-4cca-8f77-7cbd893c187a.png" alt="system diagram" />
            </figure>
            <figcaption>Fig.8 - Move mode P.I. controller feedback system diagram.</figcaption>

            <p>
                The overall system setup is shown in Fig. 9 below. Detailed descriptions of every component in the
                system can be found **HERE**. The steps taken can be summarized as follows:
            </p>

            <strong>1. Top level TCP communication</strong>
            <p>
                The “TCP_connection” VI is used to send position data from Python file “TCP_bare” to the mount controls
                subVI. The subVI outputs laser coupling percentage and the value is sent back to Python.
            </p>
            <ul>
                <li>Read data from Python</li>
                <li>Send data to subVI</li>
                <li>Return data from subVI and exit</li>
            </ul>

            <strong>2. Mount control subVI</strong>
            <p>
                The “mount_controls.vi” subVI receives an array of positions and mode number as inputs. Outputs laser
                coupling percentage.
            </p>
            <ul>
                <li>Initialize message queue and scan for controller device, return array of controller channels</li>
                <li>Create array of analog input channels and voltage sampling task</li>
                <li>Separate channel for reading photodiode to check coupling percentage</li>
                <li>Cluster mount channels and pairs</li>
                <li>Determine mode input</li>
                <ul>
                    <li>1 or 2 = "RUN"</li>
                    <li>3 = "HOME"</li>
                    <li>0/default = "END"</li>
                </ul>
            </ul>

            <strong>3. Execute current active mode based on dequeued message</strong>
            <ul>
                <li>Run &rarr; Read current laser coupling &rarr; queue Move message</li>
                <li>Move &rarr; make adjustment &rarr; check actual position &rarr; re-adjust until within margin of error &rarr; End</li>
                <li>End &rarr; store position data &rarr; close queues &rarr; output absolute position</li>
            </ul>
            <p>
                The photodiode is continuously read during this process to check for any laser coupling by averaging
                every 100 samples.
            </p>

            <strong>4. (Optional) Home: home channels and reset stored origin.</strong>
            <ul>
                <li>Take a step in the reverse direction</li>
                <li>Keep taking steps and scale by the rate of positional change</li>
                <li>When the rate of change is sufficiently small, take very small and quick steps</li>
                <li>Keep taking very small steps until the sensor is no longer moving (end of range of motion)</li>
                <li>Store home position</li>
            </ul>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221064196-bcc0a231-6718-40c8-996f-fb27634dae0f.png" alt="full system diagram" />
            </figure>
            <figcaption>Fig.9 - Full system diagram.</figcaption>

            <h2>Results</h2>
            <p>
                Using this custom controller, a user chosen position was repeatable with a high level of accuracy.
                It was determined that on average, the screw adjustments were 3 times as fast in the forward direction.
                This indicates that the friction used to move the screws using voltage control with the piezoelectric
                material had a significant effect on the step size. This effect means that adding a feedback system is
                the minimum needed to use these mounts with any degree of repeatability.
            </p>
            <p>
                Another advantage of the system created in this project is an adjustable error margin, allowing for
                extremely precise movements. After achieving this, the program was used to automate laser coupling with
                a fiber optic cable. The Python inputs were then switched from user control to inputs chosen by an
                optimizer made in Python. This was a goos test of accuracy, since this set-up is more sensitive than the
                MOT itself. After coupling was achieved, a machine learning model was used to discern the effect of
                coupling on the output of the MOT.
            </p>

            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221068944-5a192105-a86a-453e-be8b-61437ab179c5.png" alt="testing" />
            </figure>
            <figcaption>Fig.10 - Laser coupling testing and automated adjustment system diagram.</figcaption>
            <figure>
                <img src="https://user-images.githubusercontent.com/67109992/221068906-cc1eb0b9-260b-4c04-bc63-c7126dd6ff26.png" alt="setup" />
            </figure>
            <figcaption>Fig.11 - Laser coupling experimental setup.</figcaption>

            <h2>Discussion</h2>
            <p>
                Due to time constraints, the machine learning model was not able to make any significant conclusions from
                the data. However, achieving automated coupling at any level was a significant step towards automating the
                MOT and reducing set-up time while prioritizing worker safety. If this project were to be continued, the
                next steps would focus on training the M.L. model with more data and fine-tuning the automated laser
                coupling set-up on the actual experiment.
            </p>
        </div>
    );
};