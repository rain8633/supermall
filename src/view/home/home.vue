 <template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
    </ul>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import {getHomeMultidata} from "network/home";
  /*import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";*/
import homeSwiper from "./childComps/homeSwiper";
  import HomeSwiper from "./childComps/homeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  export default {
    name: "home",
    components: {
      HomeSwiper, NavBar,
      RecommendView,FeatureView
    },
    data(){
      return{
       banners:[],
        recommends:[]
      }
    },
    created() {
      //请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res);
      /*  this.result=res;*/
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;//这样写不会被销毁
      })
    }
  }
</script>

<style>
  #home{
    padding-top: 44px;
  }
.home-nav{
  background-color: var(--color-tint);
  color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
