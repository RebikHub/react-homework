import Label from "../components/Label"

export default function highlighter(data, Component) {
  if (data.views > 1000) {
      return (props) => {
          return (
          <Label title={'Popular!'} visual={'popular'}>
              <Component {...props}/>
          </Label>
          )
      }
  } else if (data.views < 100) {
      return (props) => {
          return (
          <Label title={'New!'} visual={'new'}>
              <Component {...props}/>
          </Label>
          )
      }
  }
  return (props) => <Component {...props}/>
}