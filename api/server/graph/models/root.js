import Place from './place'

export default class Root {
  place(args, ctx) {
    return Place.findOne({ 'name': args.name });
  }
  
  places() {
    return Place.find();
  }
}
