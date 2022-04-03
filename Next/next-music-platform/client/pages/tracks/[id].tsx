import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useInput } from "../../hooks/useInput";

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const userName = useInput("");
  const text = useInput("");

  const addComment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/tracks/comment",
        {
          username: userName.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        Track lists
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img
          src={"http://localhost:5000/" + track.picture}
          width={200}
          height={200}
          alt={"image"}
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Track Name - {track.name}</h1>
          <h1>Author - {track.artist}</h1>
          <h1>Liseners - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Track words</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField {...userName} label="Your name" fullWidth />
        <TextField
          {...text}
          label="Comments"
          fullWidth
          multiline
          rows={4}
          style={{ marginTop: "15px" }}
        />
        <Button onClick={addComment}>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Autor - {comment.username}</div>
            <div>Comments - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get("http://localhost:5000/tracks/" + params.id);
  return {
    props: {
      serverTrack: res.data,
    },
  };
};
