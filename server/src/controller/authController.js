import { response } from '../utils/response.js';
import { generateJwtToken } from '../utils/jwtToken.js';

import { createUserService } from '../service/authService.js';

export const createUser = async (req, res) => {
    const result = await createUserService(req.body);

    if (result.status === 201) {
      const token = generateJwtToken({ userId: result.userId });

      return res
        .status(201)
        .send(response("SUCCESS", result.message, { jwtToken: token, userId: result.userId }));
    }
    else if (result.status === 400) {
      return res.status(400).send(response("FAILED", result.message, null));
    }
    else {
      return res.status(500).send(response("FAILED", result.message, null));
    }
}