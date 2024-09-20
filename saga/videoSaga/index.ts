import { put, takeLatest, call } from "redux-saga/effects";
import { VIDEO } from "@/constants/actionConstant";
import networkCall from "@/network";
import {
  errorVideoResponce,
  requestFetchVideo,
  successfyllyVideoResponce,
} from "@/reducer/videoReducer";

const videoRequest = async () => {
  try {
    const conig = {
      method: "GET",
      url: VIDEO,
    };
    const res = await networkCall(conig);
    return res;
  } catch (e) {
    console.log(e);
  }
};


//export function* videoRequestSaga() {
    function* videoRequestSaga() : Generator<any>{
  try {
    const res:any = yield call(videoRequest);
    if (res.status == 200) {
      yield put(successfyllyVideoResponce(res?.data));
    } else {
      yield put(errorVideoResponce(res.data));
    }
  } catch (e) {
    yield put(errorVideoResponce(e));
  }
}


export function* watchVideoRequest() {
  yield takeLatest(requestFetchVideo, videoRequestSaga);
}
