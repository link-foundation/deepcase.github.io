import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Folder } from '../imports/folder';
import { Screen, Container, Grid, Typography, Link, GravityCard, AddIcon, makeStyles, List, ListItem, ListItemText, ListItemAvatar, Avatar, Accordion, AccordionSummary, AccordionDetails, Paper, Button } from '../imports/framework';
import { Provider } from '../imports/provider';

import dynamic from "next/dynamic";

import { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import { NotionRenderer } from "react-notion";

export function NotionPage({ page }: { page: string }) {
  const [{ data: notionPage, loading, error }, refetch] = useAxios(`/${page}.json`);

  return (<>
    <Typography>
      {!loading && <NotionRenderer blockMap={notionPage} />}
    </Typography>
  </>)
};
