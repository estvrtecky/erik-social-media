// src/components/PostCard.tsx

"use client";

import { useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Post } from "@/types/post";
import Caption from "./post/Caption";
import LikeButton from "./post/LikeButton";
import Timestamp from "./post/Timestamp";

export default function PostCard({ post }: { post: Post }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < post.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const imageUrl = post.images?.[currentImageIndex]?.imageUrl;

  return (
    <Card
      sx={{
        mb: 4,
        borderRadius: 2,
        boxShadow: 3,
        "&:hover": {
          boxShadow: 6,
        },
        maxWidth: 500,
        margin: "25px auto",
      }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar
          alt={post.user.name || "User"}
          src={post.user.image || ""}
          sx={{ mr: 2, width: 40, height: 40 }}
        />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}>
          {post.user.name}
        </Typography>
      </Box>

      {/* Zobrazenie obrázku príspevku */}
      {imageUrl ? (
        <CardMedia
          component="img"
          image={imageUrl} // Tu použijeme imageUrl
          alt={post.caption || "Post image"}
          sx={{
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "300px",
            backgroundColor: "grey.300",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            variant="body2"
            color="textSecondary">
            No image available
          </Typography>
        </Box>
      )}

      {/* Ak je viac ako jeden obrázok, pridáme navigáciu */}
      {post.images?.length > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <IconButton
            onClick={prevImage}
            disabled={currentImageIndex === 0}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography sx={{ alignSelf: "center" }}>
            {currentImageIndex + 1} / {post.images.length}
          </Typography>
          <IconButton
            onClick={nextImage}
            disabled={currentImageIndex === post.images.length - 1}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}

      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Box>
            <LikeButton
              postId={post.id}
              isLiked={post.likes.some((like) => like.userId === post.userId)}
              initialLikes={post.likes.length}
            />
            <IconButton>
              <ChatBubbleOutlineIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Box>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Box>

        <Caption
          username={post.user.name || "Unknown user"}
          caption={post.caption || "Bez popisu"}
        />
        <Timestamp date={post.createdAt} />
      </CardContent>
    </Card>
  );
}
