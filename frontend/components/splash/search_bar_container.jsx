import SearchBar from "./search_bar";
import { connect } from "react-redux";
import { fetchResults, clearResults } from "../../actions/search_actions";

const mSTP = props => ({
})

const mDTP = dispatch => ({
  searchResults: (query) => dispatch(fetchResults(query)),
  clearResults: () => dispatch(clearResults())
})

export default connect(mSTP, mDTP)(SearchBar)