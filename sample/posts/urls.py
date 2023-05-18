from django.urls import path
from .views import (
    posts_lists_and_create,
    load_post_data_view,
    like_unlike_post,
    load_post_data_view,
    post_detail,
    post_detail_data_view,
    update_post,
    delete_post,
     
    
    
  
)
app_name = 'posts'
 
urlpatterns = [
    
    path('',posts_lists_and_create,name='main-board'),
    path('data/<int:num_posts>/',load_post_data_view,name='posts-data'),
    path('like-unlike/',like_unlike_post,name='like-unlike'),
    # path('<pk>/',post_detail,name='posts-detail'),
    path('<pk>/data/',post_detail_data_view,name='post-detail-data'),
    
     path('<pk>/update/',update_post,name='post-update'),
     path('<pk>/delete/',delete_post,name='post-delete'),
     
    path('<pk>/',post_detail,name='posts-detail'),

] 