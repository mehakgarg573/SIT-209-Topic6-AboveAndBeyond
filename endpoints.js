module.exports = function (app) {

    app.get('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para obter um usuário.'
        // #swagger.parameters['id'] = { description: 'ID do usuário.' }

        /* #swagger.parameters['filtro'] = {
               in: 'query',
               description: 'Um filtro qualquer.',
               type: 'string'
        } */
        const filtro = req.query.filtro
  
        if(false)
            return res.status(404).send(false)
      
        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'Usuário encontrado.' 
        } */
        return res.status(200).send(data)

    })

    app.post('/users', (req, res) => {
        /* #swagger.tags = ['User']
           #swagger.description = 'Endpoint para adicionar um usuário.' */

        /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'Informações do usuário.',
               required: true,
               schema: { $ref: "#/definitions/AddUser" }
        } */

        const newUser = req.body

        if (true) {
            // #swagger.responses[201] = { description: 'Usuário registrado com sucesso!' }
            return res.status(201).send(data)
        }
        return res.status(500)    // #swagger.responses[500]
    })

    app.post('/lights/on', (req, res) => {
        // #swagger.tags = ['Smart Light']
        // #swagger.description = 'Endpoint to turn on the smart light.'
    
        if (true) {
            // #swagger.responses[200] = { description: 'Smart light turned on successfully.' }
            return res.status(200).send(true);
        }
        return res.status(500);    // #swagger.responses[500]
    });
    app.post('/lights/off', (req, res) => {
        // #swagger.tags = ['Smart Light']
        // #swagger.description = 'Endpoint to turn off the smart light.'
    
        if (true) {
            // #swagger.responses[200] = { description: 'Smart light turned off successfully.' }
            return res.status(200).send(true);
        }
        return res.status(500);    // #swagger.responses[500]
    });
    app.put('/lights/brightness', (req, res) => {
        // #swagger.tags = ['Smart Light']
        // #swagger.description = 'Endpoint to set the brightness level of the smart light.'
    
        /* #swagger.parameters['brightness'] = {
               in: 'body',
               description: 'The brightness level to set, from 1 to 100.',
               required: true,
               schema: { $ref: "#/definitions/BrightnessLevel" }
        } */
    
        const brightnessLevel = req.body;
    
        if (true) {
            // #swagger.responses[200] = { description: 'Brightness level set successfully.' }
            return res.status(200).send(true);
        }
        return res.status(500);    // #swagger.responses[500]
    });
    app.delete('/lights/:id', (req, res) => {
        // #swagger.tags = ['Smart Light']
        // #swagger.description = 'Endpoint to delete a smart light.'
        // #swagger.parameters['id'] = { description: 'The ID of the smart light to delete.' }
    
        const id = req.params.id;
    
        if (true) {
            // #swagger.responses[200] = { description: 'Smart light deleted successfully.' }
            return res.status(200).send(true);
        }
        return res.status(500);    // #swagger.responses[500]
    });

    app.get('/ac/temperature', (req, res) => {
        // #swagger.tags = ['Smart AC']
        // #swagger.description = 'Endpoint to get the current temperature of the AC.'
    
        const temperature = 25; // Get the current temperature from the AC
    
        // #swagger.responses[200] = { description: 'Current temperature retrieved successfully.', schema: { temperature: 25 } }
        return res.status(200).json({ temperature });
    });
    app.post('/ac/temperature', (req, res) => {
        // #swagger.tags = ['Smart AC']
        // #swagger.description = 'Endpoint to set the target temperature of the AC.'
        // #swagger.parameters['temperature'] = { 
        //    in: 'body',
        //    description: 'The target temperature for the AC.',
        //    required: true,
        //    schema: { $ref: "#/definitions/SetTemperature" }
        // }
    
        const { temperature } = req.body;
        // Set the target temperature of the AC here
    
        // #swagger.responses[200] = { description: 'Target temperature set successfully.' }
        return res.status(200).send(true);
    });
    app.get('/ac/power', (req, res) => {
        // #swagger.tags = ['Smart AC']
        // #swagger.description = 'Endpoint to get the current power state of the AC.'
    
        const powerState = true; // Get the current power state from the AC
    
        // #swagger.responses[200] = { description: 'Current power state retrieved successfully.', schema: { powerState: true } }
        return res.status(200).json({ powerState });
    });
    app.post('/ac/power', (req, res) => {
        // #swagger.tags = ['Smart AC']
        // #swagger.description = 'Endpoint to turn the AC on or off.'
        // #swagger.parameters['powerState'] = { 
        //    in: 'body',
        //    description: 'The desired power state for the AC.',
        //    required: true,
        //    schema: { $ref: "#/definitions/SetPowerState" }
        // }
    
        const { powerState } = req.body;
        // Turn the AC on or off here
    
        // #swagger.responses[200] = { description: 'Power state set successfully.' }
        return res.status(200).send(true);
    });

    app.get('/ac/mode', (req, res) => {
        // #swagger.tags = ['Smart AC']
        // #swagger.description = 'Endpoint to get the current mode of the AC.'
    
        const mode = 'cooling'; // Get the current mode from the AC
    
        // #swagger.responses[200] = { description: 'Current mode retrieved successfully.', schema: { mode: 'cooling' } }
        return res.status(200).json({ mode });
    });

    // Get current ironing status
  app.get('/ironing-almirah/status', (req, res) => {
    // #swagger.tags = ['Smart Ironing Almirah']
    // #swagger.description = 'Endpoint to get the current status of the ironing almirah.'

    const status = 'in use'; // Get the current status from the almirah

    // #swagger.responses[200] = { description: 'Current status retrieved successfully.', schema: { status: 'in use' } }
    return res.status(200).json({ status });
  });
// Start new ironing cycle
  app.post('/ironing-almirah/start-ironing', (req, res) => {
    // #swagger.tags = ['Smart Ironing Almirah']
    // #swagger.description = 'Endpoint to start a new ironing cycle in the almirah.'

    const settings = req.body; // Get settings from the request body

    // Start the new ironing cycle

    // #swagger.responses[200] = { description: 'New cycle started successfully.' }
    return res.status(200).send();
  });

  // Stop current ironing cycle
  app.post('/ironing-almirah/stop-ironing', (req, res) => {
    // #swagger.tags = ['Smart Ironing Almirah']
    // #swagger.description = 'Endpoint to stop the current ironing cycle in the almirah.'

    // Stop the current ironing cycle

    // #swagger.responses[200] = { description: 'Current cycle stopped successfully.' }
    return res.status(200).send();
  });

  // Set ironing time
  app.put('/ironing-almirah/time', (req, res) => {
    // #swagger.tags = ['Smart Ironing Almirah']
    // #swagger.description = 'Endpoint to set the desired ironing time for the almirah.'

    const time = req.body.time; // Get the new time from the request body

    // Set the new ironing time

    // #swagger.responses[200] = { description: 'Ironing time set successfully.' }
    return res.status(200).send();
  });

  // Get ironing history
  app.get('/ironing-almirah/history', (req, res) => {
    // #swagger.tags = ['Smart Ironing Almirah']
    // #swagger.description = 'Endpoint to get the ironing history for the almirah.'

    const history = []; // Get the ironing history from the almirah

    // #swagger.responses[200] = { description: 'Ironing history retrieved successfully.', schema: { history: [] } }
    return res.status(200).json({ history });
  });


    function myFunction(params) {
        // #swagger.start
     
        /*
           #swagger.path = '/forcedEndpoint/{id}'
           #swagger.method = 'put'
           #swagger.description = 'Endpoint forçado'
           #swagger.produces = ["application/json"]
           #swagger.tags = ['User']
        */
     
        /* #swagger.parameters['id'] = { in: 'path', description: 'ID do Usuário' } */
        const dataId = users.getUser(req.params.id)
     
        /* #swagger.parameters['obj'] = { 
               in: 'body',
               description: 'Informações do usuário',
               schema: { $ref: "#/definitions/AddUser" }
        } */
        const dataObj = req.body
     
        if (true)
            return res.status(200).send(true)   // #swagger.responses[200]
        return res.status(404).send(false)      // #swagger.responses[404]
     
        // #swagger.end
    }

}
