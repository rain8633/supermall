 <template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <goods-list :goods="goods['pop'].list"/>
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
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
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
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
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
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
      <li>2</li>
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
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getHomeMultidata,getHomeGoods} from "network/home";

  import HomeSwiper from "./childComps/homeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView"


  export default {
    name: "home",
    components: {
      TabControl,
      HomeSwiper,
      NavBar,
      RecommendView,
      FeatureView,
      GoodsList
    },
    data(){
      return{
       banners:[],
        recommends:[],
        goods:{
         'pop':{page:0,list:[] },
         'new':{page:0,list:[] },
         'sell':{page:0,list:[] },
        }
      }
    },
    created() {
      //请求多个数据
     this.getHomeMultidata()

      //2.请求商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          console.log(res);
          /*  this.result=res;*/
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;//这样写不会被销毁
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
        })
      }

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
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
