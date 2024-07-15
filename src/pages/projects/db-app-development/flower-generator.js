
import links from "../../../components/linkMetadata";
import RepoLink from "../../../components/GitHubButton";

const FlowerGen = () => {
    <div>
        <h1>Blender3D Flower Generator</h1>
        <RepoLink link={links.flowerGen.url} />

        <h2>Documentation Resources</h2>
        <p>
            Install Blender as a Python module: https://wiki.blender.org/wiki/Building_Blender/Other/BlenderAsPyModule
            Install BlenderPy module: https://github.com/TylerGubala/blenderpy
            Python API documentation: https://docs.blender.org/api/current/index.html
        </p>

        <h2>Start Guide</h2>
        <p>
            To generate a flower in Blender:
            - Go to the Scripting tab and open a Text Editor panel
            - Click the folder icon on the top toolbar and open the FlowerGenerator folder
            - Call the init file
        </p>

        <h2>Background</h2>
        <p>
            Blender Python API script to generate cherry blossoms.
            Reference: https://link.springer.com/chapter/10.1007/978-3-030-59006-2_10
        </p>
    </div>
}

export default FlowerGen;