/* eslint-disable indent */
/**
 * NotesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create ( req, res ) {
    try {
        let params = req. allParams ( );
        if ( ! params. title ) {
          return res. badRequest ( { err: 'title must be filled' } );
        }
        const results = await Notes.create ( {
          title: params. title,
          content: params.content
        } );
        return res. ok ( results );
      }
      catch ( err ) {
        return res. serverError ( err );
      }
    },
    async find(req, res){
      try {
        const fetchdata = await Notes.find();
        return res.ok(fetchdata);
      } catch (err) {
        return res.serverError(err);
      }
    },
    async findOne(req, res){
      try {
        const findbyid = await Notes.findOne({
          id: req.params.id
        });
        return res.ok(findbyid);
      } catch (err) {
        return res.serverError(err);
      }
    },
    async update(req, res){
      try {
        let params = req.allParams();
        let attributes = {};
        if(params.title){
          attributes.title = params.title;
        }
        if(params.content){
          attributes.content = params.content;
        }
        const results = await Notes.update({id: req.params.id}, attributes, {updateAt: Date.now()});
        return res.ok(results);
      } catch (err) {
        return res.serverError(err);
      }
    },
    async delete(req, res){
      try {
        const results = await Notes.destroy({
          id: req.params.id
        });
        return res.ok(results);
      } catch (err) {
      return res.serverError(err);
    }
  }
};
