const BaseResource = require('./../resources/BaseAPI.resource');
// you can either add it here for over all or individual depends on how you need it setup
const myResource = new BaseResource();

class UnicornsController {
  static fetchUnicorns(req, res) {
    // fetch a JSON object from the rails API
    // const myURL = `${myResource.baseApiUrl}/whatever-rails-endpoint`
    // return myResource.fetch(myURL).then(result => do things).catch(err => do things)
    res.status(200).json({
      data: {
        unicorns: [{
            name: "fluffy"
        }],
      },
      meta: {
        message: 'unicorn getched',
      },
    });
  }

  static createUnicorn(req, res) {
    const { name } = req.body;

    if (name === '') {
      return res.status(400).json({
        data: {},
        meta: {
          message: 'there was an error submitting your unicorn name!',
        },
      });
    }

    // same as above post to the rails api etc    

    // for funsies this just returns the name
    return res.status(200).json({
      data: {
        unicorn: {
            name
        },
      },
      meta: {
        message: 'unicorn created',
      },
    });
  }
}

module.exports = UnicornsController;
