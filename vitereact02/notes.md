# notes about virtual DOM, reconciliation, fibre, and the createRoot() function in the main.jsx file.

# The reload icon in your website/browser appears because the dom gets completely reloaded.

# The createRoot function in main.jsx create its own dom and compare it with the main dom and only updates the updates in the UI.

# React team did research on the fact that react applied the updates instantly but what if you want to wait for a few updates and then you want to apply the cumulative change to your file and thats why react fibre came out. The whole virtual dom thing is now carried out by react fiber.

# Some key features include the ability to pause, abort, or reuse work as new updates come in, and the ability to assign priority to different types of updates. 

# Reconciliation is the algorithm react uses to differentiate one tree with another to determine which parts need to be changed. And the two trees are-> dom from the browser and dom from react, which is created by createRoot() function. It is behind "virtual DOM".
# Diffing of lists is performed using keys. Keys should be stable, predictable and unique.

# Update: A change in the data used to render a React app. usually the result of 'setState'.