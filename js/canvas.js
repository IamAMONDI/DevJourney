/**
 * Dynamic Radar Chart using HTML5 Canvas 2D API
 */
function renderRadarChart(canvasId, scores) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 50; // Padding for labels
    
    // Normalize scores (assume max possible score per category is 3 for this example)
    const maxPossibleScore = 3; 
    
    const data = [
        { label: 'Low-Level', value: scores.lowLevel || 0 },
        { label: 'Full-Stack', value: scores.fullStack || 0 },
        { label: 'AR/VR', value: scores.arVr || 0 },
        { label: 'Machine Learning', value: scores.machineLearning || 0 }
    ];
    
    const numPoints = data.length;
    const angleStep = (Math.PI * 2) / numPoints;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid rings
    const rings = 4;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= rings; i++) {
        const r = (radius / rings) * i;
        ctx.beginPath();
        for (let j = 0; j <= numPoints; j++) {
            const angle = j * angleStep - Math.PI / 2; // Start at top
            const x = centerX + r * Math.cos(angle);
            const y = centerY + r * Math.sin(angle);
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    // Draw axes and labels
    ctx.font = '14px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8'; // Slate 400
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        
        // Axis line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
        ctx.stroke();
        
        // Label
        const labelRadius = radius + 25;
        const x = centerX + labelRadius * Math.cos(angle);
        const y = centerY + labelRadius * Math.sin(angle);
        ctx.fillText(data[i].label, x, y);
    }

    // Draw data polygon
    ctx.beginPath();
    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        // Normalize value between 0.1 and 1.0 so 0 score still shows a bit, but cap at 1.0
        const normalizedVal = Math.max(0.1, Math.min(data[i].value / maxPossibleScore, 1.0));
        const pointRadius = radius * normalizedVal;
        
        const x = centerX + pointRadius * Math.cos(angle);
        const y = centerY + pointRadius * Math.sin(angle);
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    
    // Fill and stroke data polygon
    ctx.fillStyle = 'rgba(59, 130, 246, 0.4)'; // Primary color with opacity
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#3b82f6'; // Primary color
    ctx.stroke();
    
    // Draw points on data polygon
    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const normalizedVal = Math.max(0.1, Math.min(data[i].value / maxPossibleScore, 1.0));
        const pointRadius = radius * normalizedVal;
        
        const x = centerX + pointRadius * Math.cos(angle);
        const y = centerY + pointRadius * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#8b5cf6'; // Accent color
        ctx.fill();
        ctx.stroke(); // Uses strokeStyle from above
    }
}
