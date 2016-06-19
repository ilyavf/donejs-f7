import Map from "can/map/";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import homeTemplate from './home.stache!';

const AppViewModel = Map.extend({
  define: {
    message: {
      value: 'Hello World!',
      serialize: false
    },
    title: {
      value: 'donejs-f-7',
      serialize: false
    },
    isSsr: {
      value: typeof process === "object" && {}.toString.call(process) === "[object process]",
    }
  },
  homeTemplate: homeTemplate
});

export default AppViewModel;
