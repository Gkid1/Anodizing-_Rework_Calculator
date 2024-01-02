function calculateRework() {
    const anodizingLayer = parseFloat(document.getElementById('anodizingLayer').value);

    // Perform the calculation directly in JavaScript
    let removedNeededArea = anodizingLayer;
    let buildUp, penetration, reworkThickness, reworkType;

    if (anodizingLayer < (25.0 / 3.0)) {
        buildUp = anodizingLayer;
        penetration = 2 * anodizingLayer;
        reworkType = "Type II";
    } else {
        buildUp = anodizingLayer;
        penetration = anodizingLayer;
        reworkType = "Type III";
    }

    reworkThickness = buildUp + penetration;

    // Output the results
    document.getElementById('result').innerHTML = `
        Removed Needed Area (X): ${removedNeededArea}µm<br>
        Build Up (B): ${buildUp}µm<br>
        Penetration (P): ${penetration}µm<br>
        Rework Thickness (Q): ${reworkThickness}µm<br>
        Rework Type: ${reworkType}
    `;
}
