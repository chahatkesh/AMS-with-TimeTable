import React,{useState} from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { paperState } from '../state/atoms/paperState';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import getEnvironment from "../../getenvironment";
import { Center, Input, FormControl, FormLabel, Textarea, useToast  } from '@chakra-ui/react'
import  {Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer} from '@chakra-ui/table';

function Submission({ activeStep, setActiveStep, handlePrevious }) {
  const apiUrl = getEnvironment();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [paper, setPaper] = useRecoilState(paperState);
  const eventId = paper.eventId;
  const handleSubmit = async ()=>{
    var form_data = new FormData();
    for ( var key in paper ) {
        //console.log(key,":",paper[key]);
        if (key === "paperUploads"){
          //console.log('file==>',paper[key][0].name);
          form_data.append('pdfFile', paper[key][0], paper[key][0].name);
        }else if(key === "codeUploads"){
          //console.log('file==>',paper[key][0].name);
          form_data.append('codeFile', paper[key][0], paper[key][0].name);
        }else if(key==="authors") {
          for (var i = 0; i < paper[key].length; i++) {
            form_data.append('authors[]', paper[key][i]);
          }
        }else{
          form_data.append(key, paper[key]);
        }
    }
    //console.log("paper details below=====>,");
    //console.log(paper);
    setIsLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/reviewmodule/paper/addpaper/${eventId}`, form_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      //console.log(response);
      toast({
        title: 'Upload successful.',
        description: response.data.message || 'Paper has been uploaded.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed.',
        description: error.response?.data?.message || 'An error occurred during upload.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }
  const handleEditClick = (step) => {
    setActiveStep(step);
  };

  function SortedAuthors(unsorted) {
    let keySet = []
    for (let j = 0; j<unsorted.length; j++) {
      keySet.push(parseInt(unsorted[j].order))
    }
    keySet.sort(function(a, b){return a - b})
    let sortedAuthors = []
    for (let k = 0; k < keySet.length; k++){
      for (let o =0; o<unsorted.length;o++){
        if(unsorted[o].order == keySet[k]) sortedAuthors.push(unsorted[o])
        }
    }
    return sortedAuthors
  }

  return (
    <div>
      <hr className="tw-mt-10" />
      {/* <p className="tw-pt-10 tw-text-2xl tw-font-bold">Review:</p> */}
      <h1 className="tw-font-bold tw-text-xl tw-text-white tw-bg-gradient-to-r tw-from-cyan-600 tw-to-cyan-500 tw-width tw-w-fit tw-m-auto"
          style={{color:'transparent', backgroundClip: 'text', fontSize:'xx-large', paddingBottom:'10px', paddingTop:'10px'}} //matched the styling on the heading with tailwind button styling
        >Review</h1>
      {/* Author Details */}
      <div className="tw-flex tw-flex-col tw-justify-center tw-gap-4 tw-pt-10">
        <h1 className="tw-font-bold tw-text-gray-600 tw-text-xl" style={{textDecoration:'underline', textDecorationColor:'#00BCD4'}}>Author Details</h1>
        <Button
          colorScheme='blue'
          className="tw-max-w-20 tw-self-end"
          onClick={() => handleEditClick(0)}
        >
          Edit
        </Button>
        <TableContainer>
          <Table
            variant='striped'
            maxWidth='100%'
            size='md'
            mt='1'
          >
            <Thead>
              <Tr>
                <Th>Order</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Designation</Th>
                <Th>Institute</Th>
              </Tr>
            </Thead>
            <Tbody>
            {/* {paper.authors.map(author => ( */}
            {SortedAuthors(paper.pseudo_authors).map(author => (
              <ItemChakraUI
              author={author}
              key={author.order}
              />
            ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <hr className="tw-p-5" />
      {/* Paper Details */}
      <div className="tw-pt-0 tw-flex tw-flex-col">
        <h1 className="tw-font-bold tw-text-gray-600 tw-text-xl" style={{textDecoration:'underline', textDecorationColor:'#00BCD4'}}>Paper Details</h1>
        <Button
          colorScheme='blue'
          className="tw-max-w-20 tw-self-end"
          onClick={() => handleEditClick(1)}
        >
          Edit
        </Button>
        <FormControl mt={4}>
              <FormLabel>Title :</FormLabel>
              <Input
                placeholder='Enter Paper Title'
                disabled
                id='title'
                value={paper.title || ''}
              />
        </FormControl>
        <FormControl mt={4}>
              <FormLabel>Abstract :</FormLabel>
              <Textarea
                placeholder='Enter Paper Abstract'
                disabled
                id='abstract'
                value={paper.abstract || ''}
              />
        </FormControl>
      </div>
      <hr className="tw-p-5" />
      {/* Code Details */}
      <div className="tw-pt-0 tw-flex tw-flex-col">
        <h1 className="tw-font-bold tw-text-gray-600 tw-text-xl" style={{textDecoration:'underline', textDecorationColor:'#00BCD4'}}>Code Uploads</h1>
        <Button
          colorScheme='blue'
          className="tw-max-w-20 tw-self-end"
          onClick={() => handleEditClick(2)}
        >
          Edit
        </Button>
        <div className="tw-flex tw-flex-col tw-gap-5 tw-p-5 tw-container tw-mx-auto ">
          {paper.codeUploads && paper.codeUploads.map((code, index) => (
            <div key={index} className="tw-flex tw-gap-5">
              {code.name}
            </div>
          ))}
        </div>
      </div>
      <hr className="tw-p-5" />
      {/* Paper Uploads */}
      <div className="tw-pt-0 tw-flex tw-flex-col">
        <h1 className="tw-font-bold tw-text-gray-600 tw-text-xl" style={{textDecoration:'underline', textDecorationColor:'#00BCD4'}}>Paper Uploads</h1>
        <Button
          colorScheme='blue'
          className="tw-max-w-20 tw-self-end"
          onClick={() => handleEditClick(3)}
        >
          Edit
        </Button>
        <div className="tw-flex tw-flex-col tw-gap-5 tw-p-5 tw-container tw-mx-auto">
          {paper.paperUploads && paper.paperUploads.map((paperUpload, index) => (
            <div key={index} className="tw-flex tw-gap-5">
              {paperUpload.name}
            </div>
          ))}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-mt-10">
        {/* <Button onClick={handlePrevious}>Back</Button> */}
        {/* <Button onClick={handleSubmit} colorScheme='blue'>Submit</Button> */}
        <Link
          onClick={handlePrevious}
          className="tw-m-auto tw-px-8 tw-text-white tw-bg-gradient-to-r tw-from-cyan-600 tw-to-cyan-500 hover:tw-bg-gradient-to-bl focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-cyan-300 dark:focus:tw-ring-cyan-800 tw-font-bold tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center"
        >Back</Link>
        <Link
          isLoading={isLoading}
          onClick={handleSubmit}
          className="tw-m-auto tw-px-8 tw-text-white tw-bg-gradient-to-r tw-from-cyan-600 tw-to-cyan-500 hover:tw-bg-gradient-to-bl focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-cyan-300 dark:focus:tw-ring-cyan-800 tw-font-bold tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center"
        >Submit</Link>
      </div>
      <br />
    </div>
  );
}

function ItemChakraUI(props) {
  return (
    <>
      <Tr>
        <Td><Center>
          {props.author.order}
        </Center></Td>
        <Td><Center>
          {props.author.name}
        </Center></Td>
        <Td><Center>
          {props.author.email}
        </Center></Td>
        <Td><Center>
          {props.author.designation}
        </Center></Td>
        <Td><Center>
          {props.author.institute}
        </Center></Td>
      </Tr>
    </>
  )
}

export default Submission;
